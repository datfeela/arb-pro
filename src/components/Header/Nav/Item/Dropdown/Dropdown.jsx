import s from "./Dropdown.module.scss";

export const Dropdown = ({ item, contentRef }) => {
    return (
        <div className={s.wrap} ref={contentRef}>
            <ul className={s.list}>
                {item.list.map((listItem) => {
                    return (
                        <li className={s.listItem}>
                            <a href={listItem.link}>{listItem.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
