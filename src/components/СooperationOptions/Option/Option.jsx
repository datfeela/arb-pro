import styled from "styled-components";
import s from "./Option.module.scss";
import { Layout, Theme } from "../../../assets/styled/theme";
import { List } from "../../_generic/List/List";

export const Option = ({ data, reversed }) => {
    return (
        <Wrap dataReversed={reversed}>
            <img className={s.image} src={`StrategicPlanning/Cooperation/${data.id}.png`} alt={`StrategicPlanning/Cooperation/${data.id}.png`}></img>
            <div className={s.contentWrap + " " + s.titleWrap}>
                <span className={s.idSpan}>{data.id}</span>
                <h3 className={s.title}>{data.title}</h3>
            </div>
            <div className={s.contentWrap + " " + s.content}>
                <span className={s.idSpan + " " + s.empty}>{data.id}</span>
                <List items={data.desc} />
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin-bottom: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
    grid-template-areas: ${(props) =>
        props.dataReversed === true
            ? `"img title"
                "img content"`
            : `"title img"
            "content img"`};

    @media (max-width: 1250px) {
        grid-column-gap: 50px;
        align-items: center;
    }

    @media (max-width: 1080px) {
        grid-template-columns: ${(props) => (props.dataReversed === true ? "4fr 3fr" : "3fr 4fr")};
        grid-template-areas: ${(props) =>
            props.dataReversed === true
                ? `"title title"
                "img content"`
                : `"title title"
            "content img"`};
        margin-bottom: 50px;
    }

    @media (max-width: 900px) {
        grid-column-gap: 35px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "title"
            "content"
            "img";
        margin-bottom: 20px;
        padding-top: 20px;
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
        padding-top: 15px;
    }
`;
