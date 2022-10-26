import { Burger } from "../../_generic/Burger/Burger";
import { NavItem } from "./Item/NavItem";
import s from "./Nav.module.scss";

export const Nav = ({ page, items, isBurgerActive, toggleActivateBurger, color, secondaryColor }) => {
    const isBasicPage = page === "basicStrategies";
    const isWithMidResolution = page === "invincibility" || page === "basicStrategies";

    const navLinks = items.map((item, index) => <NavItem key={index} item={item} color={color} secondaryColor={secondaryColor} isWithMidResolution={isWithMidResolution} />);

    return (
        <nav className={isBasicPage ? s.navWrapFullWidth : undefined}>
            <ul
                className={
                    s.nav +
                    (color === "brightGreen" ? " " + s.nav_bright : "") +
                    (isBurgerActive ? " " + s.nav_burgerActive : "") +
                    (isWithMidResolution ? " " + s.nav_withMidRes : "")
                }
            >
                {isBasicPage && <Burger color={color} isBurgerActive={isBurgerActive} toggleActivate={toggleActivateBurger} />}
                {navLinks}
            </ul>
        </nav>
    );
};
