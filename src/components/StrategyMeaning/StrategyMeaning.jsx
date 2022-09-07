import { useContext } from "react";
import s from "./StrategyMeaning.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { StrategyItem } from "./StrategyItem/StrategyItem";

export const StrategyMeaning = () => {
    const data = useContext(AppContext).state.strategyMeaning;
    let blocks;
    if (data.content.list && data.content.list.length > 0) blocks = data.content.list.map((block) => <StrategyItem key={block.id} data={block} />);

    return (
        <div className={s.wrap + " wrapInner"}>
            <div className={s.wrapInnerTop}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <img className={s.image} src="StrategicPlanning/StrategyMeaning/1.png" alt="" />
                {data.desc && (
                    <div className={s.desc}>
                        {data.desc.map((item) => (
                            <span className={item.bold ? s.text + " " + s.textBold : s.text}>{item.text}</span>
                        ))}
                    </div>
                )}
            </div>
            <div className={s.wrapInnerBot}>
                {data.content.title && (
                    <h3 className={s.subtitle}>
                        {data.content.title.map((item) => (
                            <span className={item.color === "red" && s.subtitle__text_red}>{item.text}</span>
                        ))}
                    </h3>
                )}
                <div className={s.blocksWrap}>{blocks}</div>
            </div>
        </div>
    );
};
