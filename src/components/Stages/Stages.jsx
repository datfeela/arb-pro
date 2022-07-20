import { useContext } from "react";
import styled from "styled-components";
import { Layout, Theme } from "../../assets/styled/theme";
import { AppContext } from "../../context";
import { Stage } from "./Stage/Stage";

export const Stages = () => {
    const data = useContext(AppContext).state.stages;
    const blocks = data.blocks.map((block) => <Stage key={block.id} data={block} />);

    const title = data.title.map((item) => {
        if (item.color === "red") {
            return <RedSpan>{item.text}</RedSpan>;
        }
        else {
            return item.text;
        }
    });

    return (
        <Wrap>
            <Title>{title}</Title>
            <div>{blocks}</div>
        </Wrap>
    );
};

const Wrap = styled.div`
    max-width: ${Layout.centerAreaMaxSize};
    margin: 0 auto 100px auto;
`;

const Title = styled.h2`
    font-size: 56px;
    font-weight: 600;
    line-height: 150%;
    padding: 0px ${Layout.pagePadding};
    margin-bottom: 60px;

    @media (max-width: 1120px) {
        font-size: 48px;
        margin-bottom: 40px;
    }

    @media (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        font-size: 32px;
        margin-bottom: 20px;
        padding: 0px ${Layout.pagePaddingLowRes};
    }
`;

const RedSpan = styled.span`
    color: ${Theme.redColor};
`
