import styled from "styled-components";
import { Button } from "../../_generic/Button/Button";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Actions = ({ buttonText }) => {
    return (
        <ActionsWrap>
            <IconWrap>
                <SvgSelector type="search" />
            </IconWrap>
            <Button content={buttonText} defaultWidth="244" bRad="0px 0px 0px 10px"></Button>
        </ActionsWrap>
    );
};

const ActionsWrap = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        button {
            display: none;
        }
    }
`;

const IconWrap = styled.div`
    margin: 5px 26px 0 0;
    width: 22px;
`;
