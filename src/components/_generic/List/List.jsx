import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const List = ({ items }) => {
    return (
        <ListStyled>
            {items.map((item) => (
                <DescItem>
                    <DescCircle />
                    <DescText>{item}</DescText>
                </DescItem>
            ))}
        </ListStyled>
    );
};

const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
`;

const DescItem = styled.li`
    display: flex;
    align-items: flex-start;
    margin: 10px 0px;

    @media (max-width: 900px) {
        margin: 5px 0px;
    }
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

const DescText = styled.span`
    font-size: 20px;
    line-height: 140%;

    @media (max-width: 1120px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 15px;
    }
`;
