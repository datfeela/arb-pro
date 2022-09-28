import s from "./SharingItem.module.scss";

export const SharingItem = ({ id, title, desc }) => {
    return (
        <div className={s.wrap}>
            <span className={s.title + (id === 1 ? " " + s.title_green : id === 2 ? " " + s.title_brightGreen : "")}>{title}</span>
            <span className={s.desc}>{desc}</span>
        </div>
    );
};
