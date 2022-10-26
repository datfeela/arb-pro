import styled from "styled-components";
import { ArticleTitle } from "../../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./HeaderBot.module.scss";
import { Theme } from "../../../assets/styled/theme";
import { useInView } from "react-intersection-observer";

export const HeaderBot = ({ data }) => {
    const { list, title1, title2 } = { ...data };

    const { ref, inView } = useInView({
        threshold: 0,
    });

    const listItems = list.map((item, index) => (
        <li className={s.listItem} key={index}>
            <div className={s.listItem__header}>
                <IconWrap index={index}>
                    <SvgSelector type="tick" />
                </IconWrap>
                <span>{item.title}</span>
            </div>
            <span className={s.listItem__desc}>{item.desc}</span>
        </li>
    ));

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.titleWrap}>
                    <div className={s.title + " " + s.title_withIcon}>
                        <SvgSelector type="calendar" />
                        <ArticleTitle size="medium" title={title1} />
                    </div>
                    <div className={s.title}>
                        <ArticleTitle size="medium" title={title2} />
                    </div>
                </div>
                <ul ref={ref} className={s.list + (inView ? " " + s.list_inView : "")}>
                    {listItems}
                </ul>
            </div>
            <div className={s.background} style={{ backgroundImage: `url("invincibility/unionBg/unionBg.png")` }}></div>
        </div>
    );
};

const IconWrap = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 3px;
    border: 2px solid ${Theme.darkGreenColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    svg {
        transition: all 0.4s ease;
        opacity: 0;
        visibility: hidden;
        transition-delay: calc(1s + ${(props) => `${props.index * 0.9}s`});
    }
`;
