import { useContext } from "react";
import s from "./Stages.module.scss"
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Stage } from "./Stage/Stage";

export const Stages = () => {
    const data = useContext(AppContext).state.stages;
    const blocks = data.blocks.map((block) => <Stage key={block.id} data={block} />);

    return (
        <div className={s.wrap}>
            <div className={s.wrapInner}>
                <div className={s.wrapTitle}>
                    <ArticleTitle title={data.title} />
                </div>
                <div>{blocks}</div>
            </div>
        </div>
    );
};
