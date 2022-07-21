import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";
import { TitleStyled } from "../../../assets/styled/common";

export const ArticleTitle = ({ title }) => {
    const titleText = title.map((item) => {
        return (
            <>
                <Span color={item.color ? item.color : "black"}>{item.text}</Span>
                {item.br && item.br === true && <br />}
            </>
        );
    });

    return <TitleStyled>{titleText}</TitleStyled>;
};

const Span = styled.span`
    color: ${(props) => (props.color === "white" ? "#fff" : props.color === "red" ? `${Theme.redColor}` : `${Theme.fontColor}`)};
`;
