import s from "./Session.module.scss";

export const Session = ({ data }) => {
    const { date, isOnline, title, ver } = { ...data };
    return (
        <div className={s.wrap + (isOnline ? " " + s.wrap_online : "")}>
            <div className={s.header}>
                <span className={s.version + (isOnline ? " " + s.version_online : "")}>{ver}</span>
                <span className={s.isOnline + (isOnline ? " " + s.isOnline_online : "")}>{isOnline ? "онлайн" : "офлайн"}</span>
                <span className={s.date}>{date}</span>
            </div>
            <div className={s.title}>{title}</div>
        </div>
    );
};
