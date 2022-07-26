import { useContext } from "react";
import s from "./Feedback.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { FeedbackItem } from "./Item/FeedbackItem";

export const Feedback = () => {
    const data = useContext(AppContext).state.feedback;
    const items = data.items.map((item) => (
        <FeedbackItem key={item.id} id={item.id} name={item.name} desc={item.desc} text={item.text} textExtended={item.textExtended} />
    ));

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <div className={s.content}>
                    <div className={s.items_wrap}>
                        {items}
                    </div>
                    <SvgSelector type="feedbackMain" />
                </div>
            </div>
        </div>
    );
};
