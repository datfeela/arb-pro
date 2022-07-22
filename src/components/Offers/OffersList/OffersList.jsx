import s from "./OffersList.module.scss";
import { ArticleTitle } from "../../_generic/ArticleTitle/ArticleTitle";

export const OffersList = ({ data }) => {
    return (
        <div className={s.wrap}>
            <ArticleTitle title={data.title} />
            <ul className={s.list}>
                {data.blocks.map((item) => (
                    <li className={s.listItem} key={item.id}>
                        <span className={s.id}>{`${item.id}.`}</span>
                        <div className={s.textWrap}>
                            <h3 className={s.subtitle}>{item.title}</h3>
                            <span className={s.text}>{item.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
