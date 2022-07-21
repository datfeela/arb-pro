import { useContext } from "react";
import styled from "styled-components";
import { Layout } from "../../assets/styled/theme";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Stage } from "./Stage/Stage";

export const Stages = () => {
    const data = useContext(AppContext).state.stages;
    const blocks = data.blocks.map((block) => <Stage key={block.id} data={block} />);

    return (
        <Wrap>
            <WrapInner>
                <ArticleWrap>
                    <ArticleTitle title={data.title} />
                </ArticleWrap>
                <div>{blocks}</div>
            </WrapInner>
        </Wrap>
    );
};

const Wrap = styled.div`
    max-width: 1936px;
    margin: 0 auto;
    background: #fff;
`;

const WrapInner = styled.div`
    max-width: calc(${Layout.centerAreaMaxSize} + 2 * ${Layout.pagePadding});
    margin: 0 auto;
    padding-bottom: 100px;
`;

const ArticleWrap = styled.div`
    margin-bottom: 60px;

    @media (max-width: 1120px) {
        margin-bottom: 40px;
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        margin-bottom: 20px;
    }
`;
