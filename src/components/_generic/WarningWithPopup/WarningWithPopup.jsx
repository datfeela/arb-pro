import { useRef, useState } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import s from "./WarningWithPopup.module.scss";

export const WarningWithPopup = (props) => {
    const refRel = useRef();

    const [popupDir, setPopupDir] = useState("left");

    let popupWrapClass = s.popupWrap;
    if (popupDir === "right") popupWrapClass = popupWrapClass + " " + s.popupWrap_reverse;
    if (popupDir === "left") popupWrapClass = s.popupWrap;

    const checkForSpaceLeft = () => {
        if (document.documentElement.clientWidth > 768 && refRel.current.getBoundingClientRect() && refRel.current.getBoundingClientRect().left < 275)
            setPopupDir("right");
        else if (popupDir === "right") setPopupDir("left");
    };

    return (
        <div ref={refRel} onMouseEnter={checkForSpaceLeft} className={s.wrapRelative}>
            <div className={s.iconWrap}>
                <SvgSelector type="warning" />
            </div>
            <div className={popupWrapClass}>
                <div className={s.popup}>
                    <span className={s.text}>{props.error || props.children}</span>
                </div>
            </div>
        </div>
    );
};
