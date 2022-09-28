import { useContext } from "react";
import s from "./About.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { AboutItem } from "./Item/AboutItem";

export const About = () => {
    const data = useContext(AppContext).state.layouts.strategy.about;

    const items = data.items.map((item) => <AboutItem key={item.id} num={item.num} textTop={item.textTop} desc={item.desc} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <div className={s.content}>
                    <div className={s.itemsWrap}>{items}</div>
                    <div className={s.circle}>
                        <div className={s.circleContent}>
                            <div className={s.circleHeader}>
                                <span className={s.circleNum}>{data.circleInfo.num}</span>
                                <span className={s.text + " " + s.text_highRes}>{data.circleInfo.textTop}</span>
                            </div>
                            <span className={s.text + " " + s.text_lowRes}>{data.circleInfo.textTop}</span>
                            <span className={s.text + " " + s.text_desc}>{data.circleInfo.desc}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
