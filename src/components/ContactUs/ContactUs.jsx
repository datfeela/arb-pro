import { useContext } from "react";
import s from "./ContactUs.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";
import { usePopup } from "../../hooks/usePopup";

export const ContactUs = () => {
    const yaMetricsFn = () => {
        // eslint-disable-next-line no-undef
        ym(24445127, "reachGoal", "strategy-svyazatsa-s-nami");
    };

    const data = useContext(AppContext).state.layouts.strategy.contact;

    // form popup
    const [isPopupActive, activatePopup, deactivatePopup] = usePopup();

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.header}>
                    <div className={s.titleWrap}>
                        <ArticleTitle title={data.title} />
                    </div>
                    <span className={s.desc}>{data.desc}</span>
                </div>
                <div className={s.side}>
                    <img className={s.image} src="StrategicPlanning/contactUs/1.png" alt="" />
                    <div>
                        <span className={s.name}>{data.sideText.name}</span>
                        <span className={s.sideDesc}>{data.sideText.desc}</span>
                    </div>
                </div>
                <button onClick={activatePopup} className={s.btn}>
                    {data.btnText}
                </button>
            </div>
            <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                <ContactForm
                    title={data.form.title}
                    fields={data.form.fields}
                    btnText={data.form.submitBtn}
                    submitDesc={data.form.submitDesc}
                    onFormSubmit={deactivatePopup}
                    yaMetricsFn={yaMetricsFn}
                />
            </PopupFullScreen>
        </div>
    );
};
