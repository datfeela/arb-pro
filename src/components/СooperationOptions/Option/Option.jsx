import styled from "styled-components";
import { Layout, Theme } from "../../../assets/styled/theme";
import { List } from "../../_generic/List/List";

export const Option = ({ data, reversed }) => {
    return (
        <Wrap dataReversed={reversed}>
            <Image src={`StrategicPlanning/Cooperation/${data.id}.png`} alt={`StrategicPlanning/Cooperation/${data.id}.png`}></Image>
            <ContentWrap dataTitle>
                <IdSpan>{data.id}</IdSpan>
                <Title>{data.title}</Title>
            </ContentWrap>
            <ContentWrap dataContent>
                <IdSpan empty>{data.id}</IdSpan>
                <List items={data.desc} />
            </ContentWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    padding: 0 ${Layout.pagePadding};
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
            "content";
        margin-bottom: 20px;
        padding-top: 20px;
        border-top: 1px solid ${Theme.swampColor};
    }

    @media (max-width: 480px) {
        padding: 0 ${Layout.pagePaddingLowRes};
        margin-bottom: 15px;
        padding-top: 15px;
    }
`;

const Image = styled.img`
    grid-area: img;
    margin-top: 10px;
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ContentWrap = styled.div`
    grid-area: ${(props) => (props.dataTitle ? "title" : props.dataContent && "content")};
    display: flex;

    @media (max-width: 1080px) {
        margin: ${(props) => (props.dataTitle ? "0 0 20px 0" : props.dataContent && "0 0 0 7px")};
    }

    @media (max-width: 900px) {
        span {
            font-size: ${(props) => props.dataContent && "16px"};
        }
    }

    @media (max-width: 480px) {
        span {
            font-size: ${(props) => props.dataContent && "15px"};
        }
    }
`;

const IdSpan = styled.span`
    display: block;
    margin: 14px 40px 0px 0px;
    font-size: 56px;
    font-weight: 700;
    color: ${(props) => (props.empty ? "transparent" : Theme.redColor)};

    @media (max-width: 1120px) {
        font-size: 40px;
        margin: 8px 25px 0 0;
    }

    @media (max-width: 1080px) {
        display: ${(props) => (props.empty ? "none" : "block")};
    }

    @media (max-width: 768px) {
        font-size: 34px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
`;

const Title = styled.h3`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
    line-height: 130%;
    color: #000;

    @media (max-width: 1120px) {
        font-size: 27px;
    }

    @media (max-width: 1080px) {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }
`;
