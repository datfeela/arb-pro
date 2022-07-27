import styled from "styled-components";
import s from "./Member.module.scss";

export const Member = ({ id, name, desc }) => {
    return (
        <GridWrapStyled gridArea={`m${id}`}>
            <img src={`StrategicPlanning/team/${id}.png`} alt="" className={s.image} />
            <span className={s.name}>{name}</span>
            <span className={s.desc}>{desc}</span>
        </GridWrapStyled>
    );
};

const GridWrapStyled = styled.div`
    grid-area: ${(props) => props.gridArea};
    display: flex;
    flex-direction: column;
    max-width: 210px;

    @media (max-width: 525px) {
        max-width: 140px;
    }

    @media (max-width: 400px) {
        max-width: 130px;
    }
`;
