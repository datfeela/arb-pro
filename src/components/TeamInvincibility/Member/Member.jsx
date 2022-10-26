import { List } from "../../_generic/List/List";
import s from "./Member.module.scss";

export const Member = ({ data, id }) => {
    const { name, desc, achievements } = { ...data };
    return (
        <div className={s.wrap}>
            <div className={s.content}>
                <div className={s.title}>
                    <img src={`invincibility/team/${id}.jpg`} alt="" className={s.img + " " + s.img_lowRes}></img>
                    <span>{name}</span>
                </div>
                <span className={s.desc}>{desc}</span>
                <List items={achievements} font="small" />
            </div>
            <img src={`invincibility/team/${id}.jpg`} alt="" className={s.img}></img>
        </div>
    );
};
