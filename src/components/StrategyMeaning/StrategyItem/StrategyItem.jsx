import s from "./StrategyItem.module.scss";

export const StrategyItem = ({ data }) => {
    if (data.title) {
        return (
            <div className={s.wrap}>
                <div className={s.contentWrap + " " + s.titleWrap}>
                    <span className={s.idSpan}>{data.id}</span>
                    <h3 className={s.title}>{data.title}</h3>
                </div>
                <div className={s.contentWrap + " " + s.content}>
                    <span className={s.idSpan + " " + s.empty}>{data.id}</span>
                    <span className={s.desc}>{data.desc}</span>
                </div>
            </div>
        );
    }
    return (
        <div className={s.wrap}>
            <div className={s.contentWrap + " " + s.titleWrap}>
                <span className={s.idSpan}>{data.id}</span>
                <span className={s.desc}>{data.desc}</span>
            </div>
        </div>
    );
};
