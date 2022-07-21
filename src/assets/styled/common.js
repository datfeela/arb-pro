import styled from "styled-components";
import { Layout } from "./theme";

export const TitleStyled = styled.h2`
    font-size: 56px;
    font-weight: 600;
    line-height: 150%;
    padding: 0px ${Layout.pagePadding};

    @media (max-width: 1120px) {
        font-size: 40px;
    }

    @media (max-width: 768px) {
        font-size: 34px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
        padding: 0px ${Layout.pagePaddingLowRes};
    }
`