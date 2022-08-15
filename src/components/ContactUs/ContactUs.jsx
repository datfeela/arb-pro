import { useContext, useState } from "react";
import s from "./ContactUs.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";

export const ContactUs = () => {
    const data = useContext(AppContext).state.contact;

    const [isPopupActive, setIsPopupActive] = useState(false);

    const activatePopup = () => {
        setIsPopupActive(true);
    };

    const deactivatePopup = () => {
        setIsPopupActive(false);
    };

    const initialFormValues = { name: "", phone: "", email: "", message: "Тест" };

    const submitForm = (values) => {
        console.log(values);
    };

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
                    fields={data.form.fields}
                    btnText={data.form.submitBtn}
                    submitDesc={data.form.submitDesc}
                    submitForm={submitForm}
                    initialFormValues={initialFormValues}
                />
            </PopupFullScreen>
        </div>
    );
};
