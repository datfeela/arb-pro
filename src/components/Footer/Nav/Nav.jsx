import styled from "styled-components";
import { FooterTheme, Theme } from "../../../assets/styled/theme";

export const Nav = ({ title, items }) => {
    

    return (
        <nav>
            <Title>{title}</Title>
            <List>
                {items.map((item) => (
                    <li>
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </List>
        </nav>
    );
};

const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    color: ${FooterTheme.fontColor};
    margin-bottom: 14px;
`;

const List = styled.ul`

`
const Link = styled.a`
    font-size: 15px;
    line-height: 170%;
    color: ${FooterTheme.fontColor};

    &:hover {
        color: ${Theme.greenColor};
    }
`;