import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./PresentationItem.module.scss";

export const PresentationItem = ({ index, text }) => {

    return (
        <div className={s.wrap}>
            <div className={s.header}>
                <span>{index}.0</span>
                <SvgSelector type="dotsDivider" />
            </div>
            <div className={s.content}>
                <span>{text}</span>
                <a href="#test" className={s.link}>
                    <SvgSelector type="download2" />
                </a>
            </div>
        </div>
    );
};
