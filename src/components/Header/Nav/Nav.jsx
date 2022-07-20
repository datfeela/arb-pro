import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const Nav = ({ items }) => {
    const navLinks = items.map((item) => {
        if (item.name === "Стратегия") {return <LinkActive href={item.link}>{item.name}</LinkActive>;}
        else return <Link href={item.link}>{item.name}</Link>
    });

    return <NavWrap>{navLinks}</NavWrap>;
};

const NavWrap = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${Theme.swampColor};

    @media (max-width: 1500px) {
        display: none;
    }
`;

const Link = styled.a`
    position: relative;
    font-size: 15px;
    font-weight: 600;
    margin: 0 1em;
    color: ${Theme.darkGreenColor};

    &::before {
        content: "";
        background-color: transparent;
        position: absolute;
        top: -8px;
        left: 50%;
        transition: background-color 0.5s;
        transform: translateX(-50%);
        border-radius: 50%;
        width: 7px;
        height: 7px;
    }

    &:hover {
        color: ${Theme.redColor};

        &::before {
            background-color: ${Theme.redColor};
        }
    }
`;

const LinkActive = styled(Link)`
    color: ${Theme.redColor};

    &::before {
        content: "";
        background-color: ${Theme.redColor};
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        width: 7px;
        height: 7px;
    }
`;
