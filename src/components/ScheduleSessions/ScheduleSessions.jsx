import { useContext, useState } from "react";
import { AppContext } from "../../context";
import s from "./ScheduleSessions.module.scss";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Session } from "./Session/Session";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";
import { usePopup } from "../../hooks/usePopup";

export const ScheduleSessions = () => {
    const data = useContext(AppContext).state.layouts.invincibility.scheduleSessions;
    const { title, downloadButtonText, sessions, popupForm } = { ...data };

    const sessionsBlocks = sessions.map((item, index) => <Session key={index} data={{ ...item }} />);

    // form popup
    const [isPopupActive, activatePopup, deactivatePopup] = usePopup();

    return (
        <div id="scheduleInvincibility" className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.header}>
                    <div className={s.titleIcon}>
                        <SvgSelector type="calendarTick" />
                    </div>
                    <ArticleTitle size="medium" title={title} />
                    <button onClick={activatePopup} className={s.btn + " " + s.btn_header}>
                        <SvgSelector type="download" />
                        <span>{downloadButtonText}</span>
                    </button>
                </div>
                <div className={s.content}>{sessionsBlocks}</div>
                <button onClick={activatePopup} className={s.btn + " " + s.btn_bottom}>
                    <SvgSelector type="download" />
                    <span>{downloadButtonText}</span>
                </button>
            </div>
            <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                <ContactForm
                    title={popupForm.title}
                    fields={popupForm.fields}
                    btnText={popupForm.submitBtn}
                    submitDesc={popupForm.submitDesc}
                    onFormSubmit={deactivatePopup}
                />
            </PopupFullScreen>
        </div>
    );
};
