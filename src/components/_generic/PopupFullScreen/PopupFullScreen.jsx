import { useEffect, useRef } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import s from "./PopupFullScreen.module.scss";

export const PopupFullScreen = (props) => {
    const closeBtnRef = useRef();

    // useEffect(() => {
    //     if (props.isPopupActive) document.querySelector("html").style.overflowY = "hidden";
    //     else document.querySelector("html").style.overflowY = "scroll";
    // }, [props.isPopupActive]);

    const handleClick = (e) => {
        closeBtnRef.current.contains(e.target) && props.deactivatePopup();
    };

    if (props.isPopupActive) {
        return (
            <div onClick={handleClick} className={s.wrapFixed}>
                <div className={s.wrapRelative}>
                    <div className={s.content}>{props.children}</div>
                    <div ref={closeBtnRef} className={s.icon}>
                        <SvgSelector type="close" />
                    </div>
                </div>
            </div>
        );
    }

    return <></>;
};
