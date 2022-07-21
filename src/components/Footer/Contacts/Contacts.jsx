import styled from "styled-components";
import { FooterTheme, Theme } from "../../../assets/styled/theme";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Contacts = ({ contacts }) => {
    return (
        <Wrap>
            <LinksWrap>
                <LinkContact href={contacts.phone.link}>{contacts.phone.title}</LinkContact>
                <LinkContact href={contacts.email.link}>{contacts.email.title}</LinkContact>
            </LinksWrap>
            <LinksWrapSocials>
                <LinkSocial href={contacts.socials.WA}>
                    <SvgSelector type="WA" />
                </LinkSocial>
                <LinkSocial href={contacts.socials.TG}>
                    <SvgSelector type="TG" />
                </LinkSocial>
                <LinkSocial href={contacts.socials.YT}>
                    <SvgSelector type="YT" />
                </LinkSocial>
                <LinkSocial href={contacts.socials.VK}>
                    <SvgSelector type="VK" />
                </LinkSocial>
            </LinksWrapSocials>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin-left: auto;
    width: 380px;

    @media (max-width: 1120px) {
        max-width: 330px;
    }

    @media (max-width: 768px) {
        grid-area: contacts;
        margin: 0;
        max-width: 280px;
    }
`;

const LinksWrap = styled.div`
    margin-bottom: 130px;

    @media (max-width: 768px) {
        margin-bottom: 25px;
    }
`;

const LinkContact = styled.a`
    display: block;
    margin-bottom: 10px;
    width: 100%;
    color: ${FooterTheme.fontColor};
    font-size: 37px;
    font-weight: 600;
    line-height: 130%;

    &:hover {
        color: ${Theme.greenColor};
    }

    @media (max-width: 1120px) {
        font-size: 30px;
    }

    @media (max-width: 768px) {
        font-size: 27px;
    }
`;

const LinksWrapSocials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkSocial = styled.a`
    svg {
        fill: #fff;

        &:hover {
            fill: ${Theme.greenColor};
        }
    }
`;
