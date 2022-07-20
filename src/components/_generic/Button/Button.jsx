import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const Button = ({content, defaultWidth, bRad}) => { 
    return (
        <ButtonStyled width={defaultWidth} bRad={bRad}>
            {content}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    background-color: ${Theme.redColor};
    color: #fff;
    width: ${(props) => `${props.width}px`};
    padding: 20px 0;
    border-radius: ${(props) => props.bRad};
    font-size: 16px;
    line-height: 125%;

    @media (max-width: 1120px) {
        padding: 12px 0;
        width: ${(props) => `${+props.width * 0.8}px`};
    }

    @media (max-width: 768px) {
        padding: 10px 0;
        font-size: 15px;
        width: ${(props) => `${+props.width * 0.7}px`};
    }
`;