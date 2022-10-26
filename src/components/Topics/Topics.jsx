import { useContext } from "react";
import { AppContext } from "../../context";
import s from "./Topics.module.scss";
import particles from "../../assets/animations/particles.json";
import Lottie from "lottie-react";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import styled from "styled-components";

export const Topics = () => {
    const data = useContext(AppContext).state.layouts.invincibility.topics;
    const { title, list } = { ...data };

    const listItems = list.map((item, id) => (
        <li className={s.listItem}>
            <span className={s.index}>{id + 1}</span>
            <span className={s.text}>{item}</span>
        </li>
    ));

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.header}>
                    <div className={s.icon}>
                        <SvgSelector type="topics" />
                    </div>
                    <ArticleTitle title={title} />
                </div>
                <List columns={listItems.length / 2}>{listItems}</List>
            </div>
            <div className={s.animationWrap}>
                <Lottie animationData={particles} />
            </div>
        </div>
    );
};

const List = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: ${(props) => `repeat(${props.columns}, 1fr)`};
    grid-row-gap: 40px;
    grid-column-gap: 100px;

    @media (max-width: 1120px) {
        grid-row-gap: 30px;
        grid-column-gap: 65px;
    }

    @media (max-width: 768px) {
        grid-row-gap: 15px;
        grid-column-gap: 30px;
    }

    @media (max-width: 600px) {
        grid-template-rows: unset;
        grid-auto-flow: row;
    }
`;
