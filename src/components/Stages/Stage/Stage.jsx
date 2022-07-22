import s from "./Stage.module.scss"
import { List } from "../../_generic/List/List";

export const Stage = ({ data }) => {
    return (
        <div className={s.wrap}>
            <div className={s.title}>
                <span className={s.idSpan}>{data.id}</span>
                <h3 className={s.titleText}>{data.title}</h3>
            </div>
            <List items={data.desc} />
        </div>
    );
};
