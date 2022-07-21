import { useContext } from "react";
import styled from "styled-components";
import { Layout, Theme } from "../../assets/styled/theme";
import { AppContext } from "../../context";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { Contacts } from "./Contacts/Contacts";
import { Docs } from "./Docs/Docs";
import { Nav } from "./Nav/Nav";

export const Footer = () => {
    const data = useContext(AppContext).state.footer;
    return (
        <FooterStyled>
            <FooterContent>
                <Navs>
                    <Nav title={data.nav.title} items={data.nav.items} />
                    <Nav title={data.navAbout.title} items={data.navAbout.items} />
                </Navs>
                <Contacts contacts={data.contacts} />
                <LogoWrap>
                    <SvgSelector type="footer-logo" />
                </LogoWrap>
                <Docs docs={data.docs} />
                <License>{data.license.copyright}</License>
                <Link href={data.license.privacy.link}>
                    <License>{data.license.privacy.title}</License>
                </Link>
            </FooterContent>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    background-color: #0a0909;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 85px calc(${Layout.pagePadding} * 2) 65px calc(${Layout.pagePadding} * 2);

    @media (max-width: 768px) {
        padding: 50px calc(${Layout.pagePadding} * 2) 30px calc(${Layout.pagePadding} * 2);
    }

    @media (max-width: 480px) {
        padding: 20px ${Layout.pagePaddingLowRes};
    }
`;

const FooterContent = styled.div`
    width: 100%;
    max-width: ${Layout.centerAreaMaxSize};

    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-row-gap: 100px;
    grid-column-gap: 20px;

    @media (max-width: 1120px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 80px;
    }

    @media (max-width: 768px) {
        grid-template-areas:
            "navs"
            "logo"
            "contacts"
            "docs";
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
    }
`;

const Navs = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    grid-column-gap: 20px;

    @media (max-width: 768px) {
        grid-area: navs;
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
    }
`;

const LogoWrap = styled.div`
    @media (max-width: 768px) {
        grid-area: logo;
    }
`;

const License = styled.span`
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
`;

const Link = styled.a`
    span {
        border-bottom: 1px solid #707070;
    }

    &:hover {
        span {
            color: #fff;
            border-bottom: 1px solid ${Theme.greenColor};
        }
    }

    @media (max-width: 768px) {
        margin-top: -30px;
    }
`;
