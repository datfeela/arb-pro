import { useState } from "react";
import { usePopup } from "../../../hooks/usePopup";
import { ContactForm } from "../../_generic/ContactForm/ContactForm";
import { PopupFullScreen } from "../../_generic/PopupFullScreen/PopupFullScreen";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./HeaderTop.module.scss";
import { Slider } from "./Slider/Slider";

export const HeaderTop = ({ data }) => {
    const { btnText, desc, list, title, popupForm, slidesCount } = { ...data };

    const listItems = list.map((item, index) => (
        <li className={s.listItem} key={index}>
            <SvgSelector type={item.icon} />
            <span>{item.text}</span>
        </li>
    ));

    // form popup
    const [isPopupActive, activatePopup, deactivatePopup] = usePopup();

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <h1 className={s.title}>{title}</h1>
                <div className={s.content}>
                    <span className={s.desc}>{desc && desc}</span>
                    <ul className={s.list}>{listItems}</ul>
                    <button onClick={activatePopup} className={s.btn + " formButton"}>
                        {btnText}
                    </button>
                </div>
                <div className={s.images}>
                    <Slider slidesCount={slidesCount} />
                </div>
            </div>
            <div className={s.background} style={{ backgroundImage: `url("invincibility/unionBg/unionBgDark.png")` }}></div>
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
