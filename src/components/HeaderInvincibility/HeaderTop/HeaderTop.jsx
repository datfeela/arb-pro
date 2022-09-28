import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./HeaderTop.module.scss";

export const HeaderTop = ({ data }) => {
    const { btnText, desc, list, title } = { ...data };

    const listItems = list.map((item, index) => (
        <li className={s.listItem} key={index}>
            <SvgSelector type={item.icon} />
            <span>{item.text}</span>
        </li>
    ));

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <h1 className={s.title}>{title}</h1>
                <div className={s.content}>
                    <span className={s.desc}>{desc}</span>
                    <ul className={s.list}>{listItems}</ul>
                    <button className={s.btn + " formButton"}>{btnText}</button>
                </div>
                <div className={s.images}>
                    <span>Слайдер</span>
                </div>
            </div>
            <div className={s.background} style={{ backgroundImage: `url("/invincibility/unionBgDark.png")` }}></div>
        </div>
    );
};
