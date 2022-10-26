import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context";
import s from "./Goal.module.scss";
import { parallaxMoveInView } from "../../assets/utils/parallax";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";
import { usePopup } from "../../hooks/usePopup";

export const Goal = () => {
    const data = useContext(AppContext).state.layouts.invincibility.goal;
    const { title, btnText, popupForm } = { ...data };

    // parallax

    function scrollHandler() {
        circleRef.current && parallaxMoveInView({ target: circleRef.current, moveCoefX: -0.09, threshholdX: { min: -100, max: 0 } });
        imgRef.current && parallaxMoveInView({ target: imgRef.current, moveCoefX: 0.045, threshholdX: { min: 0, max: 50 } });
    }

    const circleRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", scrollHandler);
        scrollHandler();

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", scrollHandler);
        };
    }, []);

    // form popup
    const [isPopupActive, activatePopup, deactivatePopup] = usePopup();

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.photo}>
                    <div ref={circleRef} className={s.circle}></div>
                    <img ref={imgRef} src="invincibility/goal/1.png" alt="" className={s.img} />
                </div>
                <div className={s.content}>
                    <h2 className={s.title}>{title[0].text}</h2>
                    <button onClick={activatePopup} className={s.btn + " formButton"}>
                        {btnText}
                    </button>
                </div>
            </div>
            <div className={s.background} style={{ backgroundImage: `url("invincibility/unionBg/unionBgRed.png")` }}></div>
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
