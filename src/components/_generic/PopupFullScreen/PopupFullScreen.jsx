import { useEffect, useRef } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import s from "./PopupFullScreen.module.scss";

export const PopupFullScreen = (props) => {
    const closeBtnRef = useRef();

    useEffect(() => {
        const bodyRef = document.body;
        const headerRef = document.querySelector("header") && document.querySelector("header").firstChild; //todo: fix this with state

        if (props.isPopupActive && !bodyRef.classList.contains("no-scroll")) {
            bodyRef.classList.add("no-scroll");
            headerRef.classList.add("header-no-scroll"); //and this
        }
        if (!props.isPopupActive && bodyRef.classList.contains("no-scroll")) {
            bodyRef.classList.remove("no-scroll");
            headerRef.classList.remove("header-no-scroll"); //and this, then remove styles from global and move to header module
        }
    }, [props.isPopupActive]);

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
