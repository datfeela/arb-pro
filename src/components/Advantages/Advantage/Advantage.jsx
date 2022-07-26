import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./Advantage.module.scss";

export const Advantage = ({ data }) => {
    return (
        <div className={s.wrap}>
            <div className={s.iconWrap}>
                <SvgSelector type={data.icon} />
            </div>
            <span className={data.color === "brightGreen" ? s.text + " " + s.text_green : s.text}>{data.text}</span>
        </div>
    );
};
