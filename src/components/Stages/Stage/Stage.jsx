import styled from "styled-components";
import { Layout, Theme } from "../../../assets/styled/theme";

export const Stage = ({ data }) => {
    return (
        <Wrap>
            <Title>
                <IdSpan>{data.id}</IdSpan>
                <TitleText>{data.title}</TitleText>
            </Title>
            <DescWrap>
                {data.desc.map((item) => (
                    <DescItem>
                        <DescCircle />
                        <DescText>{item}</DescText>
                    </DescItem>
                ))}
            </DescWrap>
        </Wrap>
    );
};

const Wrap = styled.div`
    /* display: flex; */
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: flex-start;
    justify-content: space-between;
    padding: 26px ${Layout.pagePadding};
    border-top: 1px solid ${Theme.swampColor};

    @media (max-width: 850px) {
        grid-template-columns: none;
    }

    @media (max-width: 480px) {
        padding: 15px ${Layout.pagePaddingLowRes};
    }
`;



const Title = styled.div`
    display: flex;
    margin-right: 1.3em;
    @media (max-width: 850px) {
        margin-bottom: 1em;
    }
`;

const IdSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    min-width: 42px;
    width: 42px;
    margin: 4.5px 40px 0 0;
    line-height: 140%;
    font-weight: 700;
    border-radius: 50%;
    background-color: ${Theme.lightRedColor};
    color: #fff;

    @media (max-width: 1120px) {
        height: 34px;
        min-width: 34px;
        width: 34px;
        margin: 3.5px 20px 0 0;
    }

    @media (max-width: 480px) {
        height: 28px;
        min-width: 28px;
        width: 28px;
        margin: 4.5px 15px 0 0;
    }
`;

const TitleText = styled.span`
    font-size: 30px;
    line-height: 167%;
    font-weight: 600;

    @media (max-width: 1120px) {
        font-size: 25px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }
`;

const DescWrap = styled.div`
    /* min-width: 61.3%;
    width: 61.3%; */
    display: flex;
    flex-direction: column;
`;

const DescItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 10px 0px;
`;

const DescCircle = styled.span`
    display: inline-block;
    margin: 10.5px 15px 0 0;
    height: 7px;
    min-width: 7px;
    width: 7px;
    background-color: ${Theme.redColor};
    border-radius: 50%;
`;


const DescText = styled.span``;
