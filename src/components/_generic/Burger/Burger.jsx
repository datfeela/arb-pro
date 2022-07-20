import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const Burger = () => {
    return (
        <BurgerWrap>
            <span></span>
            <span></span>
            <span></span>
        </BurgerWrap>
    );
};

const BurgerWrap = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23px;
    height: 21px;

    @media (max-width: 480px) {
        width: 18px;
        height: 15px;
    }

    span {
        height: 3px;
        width: 100%;
        background-color: ${Theme.darkGreenColor};
    }
`;
