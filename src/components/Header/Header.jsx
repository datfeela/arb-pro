import { useContext } from "react";
import styled from "styled-components";
import { Layout } from "../../assets/styled/theme";
import { AppContext } from "../../context";
import { Burger } from "../_generic/Burger/Burger";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { Actions } from "./Actions/Actions";
import { Nav } from "./Nav/Nav";

export const Header = () => {
    const data = useContext(AppContext).state.header;

    return (
        <HeaderFixedWrap>
            <HeaderStyled>
                <LeftSide>
                    <LogoWrap href="https://arb-pro.ru/">
                        <SvgSelector type="headerLogo" />
                    </LogoWrap>
                    <Burger></Burger>
                </LeftSide>
                <Nav items={data.nav}></Nav>
                <Actions buttonText={data.buttonText}></Actions>
            </HeaderStyled>
        </HeaderFixedWrap>
    );
};

const HeaderFixedWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: ${Layout.headerHeight};
    display: flex;
    justify-content: center;
`;

const HeaderStyled = styled.div`
    max-width: calc(1920px + ${Layout.scrollbarWidth});
    width: calc(100% - ${Layout.scrollbarWidth});
    margin-right: ${Layout.scrollbarWidth};
    padding-left: 40px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: #fff;

    @media (max-width: 1250px) {
        padding-left: calc(${Layout.pagePadding} + 3px);
    }

    @media (max-width: 1120px) {
        width: calc(100% - ${Layout.scrollbarWidth1120} + 1px);
        margin-right: ${Layout.scrollbarWidth1120};
        padding-left: calc(${Layout.pagePadding} + 3px);
    }

    @media (max-width: 768px) {
        width: calc(100% - ${Layout.scrollbarWidth768} + 1px);
        margin-right: ${Layout.scrollbarWidth768};
        padding-left: calc(${Layout.pagePadding} + 3px);
    }

    @media (max-width: 480px) {
        padding-left: calc(${Layout.pagePaddingLowRes} + 3px);
    }
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

const LogoWrap = styled.a`
    width: 142px;
    margin-right: 28px;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        width: 100px;
        margin-right: 16px;
    }
`;
