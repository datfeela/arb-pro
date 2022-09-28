import { useContext } from "react";
import s from "./Tools.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Tool } from "./Tool/Tool";

export const Tools = () => {
    const data = useContext(AppContext).state.layouts.strategy.tools;
    const blocks = data.list.map((block) => {
        return <Tool key={block.id} data={block} />;
    });

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <span className={s.description}>{data.desc}</span>
                <div className={s.blocksWrap}>{blocks}</div>
            </div>
        </div>
    );
};
