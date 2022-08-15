import { List } from "../../../_generic/List/List";
import s from "./Case.module.scss";

export const Case = ({ id, title, desc, linkText, linkHref, was, result, wasTitle, resultTitle }) => {
    return (
        <div className={s.wrap}>
            <div className={s.header}>
                <div className={s.imgWrap}>
                    <img src={`StrategicPlanning/cases/${id}.png`} alt="" className={s.headerImg} />
                </div>
                <div className={s.headerContent}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.desc}>{desc}</span>
                </div>
            </div>
            <div className={s.wasResult}>
                <div className={s.listWrap + " " + s.was}>
                    <h4 className={s.subtitle}>{wasTitle}</h4>
                    <List items={was} font="small" />
                </div>
                <div className={s.listWrap + " " + s.result}>
                    <h4 className={s.subtitle}>{resultTitle}</h4>
                    <List items={result} font="small" type="checkMark" />
                    <a target="_blank" rel="noreferrer" href={linkHref} className={s.btn}>
                        {linkText}
                    </a>
                </div>
            </div>
        </div>
    );
};
