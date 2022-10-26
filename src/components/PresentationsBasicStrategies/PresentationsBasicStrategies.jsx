import { useContext, useEffect, useRef } from "react";
import s from "./PresentationsBasicStrategies.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { parallaxCustomized } from "../../assets/utils/parallax";
import { PresentationItem } from "./PresentationItem/PresentationItem";
import styled from "styled-components";

export const PresentationsBasicStrategiesimport = () => {
    const data = useContext(AppContext).state.layouts.basicStrategiesRecordsSale.presentations;
    const { title, btnText, items } = { ...data };
    console.log(data);

    const elements = items.map((item, index) => <PresentationItem key={index} index={index + 1} text={item} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className="wrapInner">
                <div className={s.header}>
                    <div className={s.titleWrap}>
                        <ArticleTitle title={title} />
                    </div>
                    <a href="#test" className={s.link}>
                        <span>{btnText}</span>
                        <div className={s.icon}>
                            <SvgSelector type="download2" />
                        </div>
                    </a>
                </div>
                <Items length={elements.length}>{elements}</Items>
            </div>
        </div>
    );
};

const Items = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: ${(props) => `repeat(${Math.ceil(props.length / 2)}, 1fr)`};
    grid-column-gap: 80px;
    grid-row-gap: 50px;

    @media (max-width: 1120px) {
        grid-column-gap: 40px;
        grid-row-gap: 25px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-auto-flow: row;
    }
`;
