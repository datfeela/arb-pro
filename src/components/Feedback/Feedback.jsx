import { useContext, useState } from "react";
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

    const [isExpanded, setIsExpanded] = useState(false);

    const handleBtnClick = () => {
        setIsExpanded(true);
    };

    const [item1, item2, ...restItems] = items;
    const itemsStart = [item1, item2];

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <div className={s.content}>
                    <div className={s.itemsWrap}>
                        {itemsStart}
                        {isExpanded && restItems}
                    </div>
                    <div className={s.iconWrap + " " + s.iconWrap_default}>
                        <SvgSelector type="feedbackMain" />
                    </div>
                    <div className={s.iconWrap + " " + s.iconWrap_lowRes}>
                        <SvgSelector type="feedbackMainLowRes" />
                    </div>
                </div>
                <button onClick={handleBtnClick} className={isExpanded ? s.expandBtn + " " + s.expandBtn_hidden : s.expandBtn}>
                    Показать все отзывы
                </button>
            </div>
        </div>
    );
};
