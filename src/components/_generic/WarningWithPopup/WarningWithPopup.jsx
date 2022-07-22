import { SvgSelector } from "../SvgSelector/SvgSelector";
import s from "./WarningWithPopup.module.scss";

export const WarningWithPopup = (props) => {
    return (
        <div className={s.wrapRelative}>
            <div className={s.iconWrap}>
                <SvgSelector type="warning" />
            </div>
            <div className={s.popupWrap}>
                <div className={s.popup}>
                    <span className={s.text}>{props.error || props.children}</span>
                </div>
            </div>
        </div>
    );
};
