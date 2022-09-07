import styled from "styled-components";
import s from "./Member.module.scss";

export const Member = ({ id, name, desc, doubleImg }) => {
    return (
        <GridWrapStyled gridArea={`m${id}`} doubleImg={doubleImg}>
            {doubleImg ? (
                <>
                    <img src={`StrategicPlanning/team/${id}.png`} alt="" className={s.image + " " + s.imageHighRes} />
                    <img src={`StrategicPlanning/team/${id}low.png`} alt="" className={s.image + " " + s.imageLowRes} />
                </>
            ) : (
                <img src={`StrategicPlanning/team/${id}.png`} alt="" className={s.image} />
            )}
            <span className={s.name}>{name}</span>
            <span className={s.desc}>{desc}</span>
        </GridWrapStyled>
    );
};

const GridWrapStyled = styled.div`
    grid-area: ${(props) => props.gridArea};
    display: flex;
    flex-direction: column;
    max-width: ${(props) => (props.doubleImg ? "325px" : "210px")};

    @media (max-width: 1120px) {
        max-width: ${(props) => (props.doubleImg ? "290px" : "210px")};
    }

    @media (max-width: 1000px) {
        max-width: 300px;
    }

    @media (max-width: 768px) {
        max-width: 220px;
    }

    @media (max-width: 500px) {
        max-width: 139px;
    }
`;
