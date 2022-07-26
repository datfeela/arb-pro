import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./Tool.module.scss";

export const Tool = ({ data }) => {
    return (
        <div className={s.wrap}>
            <div className={s.iconWrap}>
                <SvgSelector type={data.icon} />
            </div>
            <span className={s.text}>{data.text}</span>
        </div>
    );
};
