import { useContext, useState } from "react";
import s from "./QA.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { QAItem } from "./Item/QAItem";

export const QA = () => {
    const data = useContext(AppContext).state.layouts.strategy.QA;

    const [activeItemId, setActiveItemId] = useState(data.items[0].id);

    const items = data.items.map((item) => (
        <QAItem
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            list={item.list}
            activeItemId={activeItemId}
            setActiveItemId={setActiveItemId}
        />
    ));

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <div className={s.items}>{items}</div>
            </div>
        </div>
    );
};
