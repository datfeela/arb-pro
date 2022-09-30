import { useContext } from "react";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import s from "./TrainingPlan.module.scss";
import { TrainingPlanItem } from "./TrainingPlanItem/TrainingPlanItem";

export const TrainingPlan = () => {
    const data = useContext(AppContext).state.layouts.invincibility.trainingPlan;
    const { title1, title2, items } = { ...data };

    const blocks = items.map((item, index) => <TrainingPlanItem key={index} id={index} data={{ ...item }} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.header}>
                    <div className={s.title + " " + s.title_withBg}>
                        <ArticleTitle size="medium" title={title1} />
                    </div>
                    <div className={s.title}>
                        <ArticleTitle size="medium" title={title2} />
                    </div>
                </div>
                <div className={s.content}>{blocks}</div>
            </div>
        </div>
    );
};
