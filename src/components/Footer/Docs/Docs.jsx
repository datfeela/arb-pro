import styled from "styled-components";
import { FooterTheme, Theme } from "../../../assets/styled/theme";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Docs = ({ docs }) => {
    return (
        <Wrap>
            <Link href={docs.booklet.link}>
                <SvgSelector type="pdf-down" />
                <TextWrap>
                    {docs.booklet.title.map((item) => (
                        <Text>{item}</Text>
                    ))}
                </TextWrap>
            </Link>
            <Link href={docs.logo.link}>
                <SvgSelector type="logo-down" />
                <TextWrap>
                    {docs.logo.title.map((item) => (
                        <Text>{item}</Text>
                    ))}
                </TextWrap>
            </Link>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin-left: auto;
    width: 380px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1120px) {
        max-width: 330px;
    }

    @media (max-width: 768px) {
        grid-area: docs;
        justify-content: unset;
        flex-direction: column;
        margin: 0;
        max-width: 280px;
    }
`;

const Link = styled.a`
    display: flex;

    &:hover {
        span {
            color: #fff;
            border-bottom: 1px solid ${Theme.greenColor};
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 15px;
        display: grid;
        grid-template-columns: 35px 1fr;

        svg {
            justify-self: center;
        }
    }
`;

const TextWrap = styled.div`
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Text = styled.span`
    color: ${FooterTheme.fontColor};
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    border-bottom: 1px solid ${FooterTheme.fontColor};
`;
