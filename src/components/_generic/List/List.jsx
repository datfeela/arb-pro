import s from "./List.module.scss";

export const List = ({ items, font }) => {
    let textClass = s.text;
    if (font && font === "small") textClass = textClass + " " + s.text_small;

    return (
        <ul className={s.list}>
            {items.map((item) => (
                <li className={s.item}>
                    <span className={s.circle} />
                    <span className={textClass}>{item}</span>
                </li>
            ))}
        </ul>
    );
};
