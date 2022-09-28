import { useContext } from "react";
import s from "./Cases.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { CasesScreen } from "./CasesScreen/CasesScreen";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";

export const Cases = () => {
    const data = useContext(AppContext).state.layouts.strategy.cases;
    const footerText = data.footerText.map((item) => <span className={item.bold ? s.text + " " + s.text_bold : s.text}>{item.text}</span>);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <CasesScreen content={data.content} />
            </div>
            <div className={s.footer}>
                <div className={s.footer__Wrap + " wrapInner"}>
                    <div className={s.iconWrap}>
                        <SvgSelector type="star" />
                    </div>

                    <div>{footerText}</div>
                </div>
            </div>
        </div>
    );
};
