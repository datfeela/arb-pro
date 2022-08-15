import { SvgSelector } from "../SvgSelector/SvgSelector";
import s from "./List.module.scss";

export const List = ({ items, font, type }) => {
    let textClass = s.text;
    let circleClass = s.circle;
    if (font && font === "small") {
        circleClass = circleClass + " " + s.circle_small;
        textClass = textClass + " " + s.text_small
    };

    return (
        <ul className={s.list}>
            {items.map((item) => (
                <li className={s.item}>
                    {!type && <span className={circleClass} />}
                    {type && (
                        <div className={s.iconWrap}>
                            <SvgSelector type={type} />
                        </div>
                    )}
                    <span className={textClass}>{item}</span>
                </li>
            ))}
        </ul>
    );
};
