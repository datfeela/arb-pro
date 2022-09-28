import { NavItem } from "./Item/NavItem";
import s from "./Nav.module.scss";

export const Nav = ({ items, isBurgerActive, color }) => {
    const navLinks = items.map((item, index) => <NavItem key={index} item={item} color={color} />);

    // return <nav className={isBurgerActive ? s.nav + " " + s.nav_burgerActive : s.nav}>{navLinks}</nav>;
    return (
        <nav>
            <ul className={s.nav + (color === "brightGreen" ? " " + s.nav_bright : "") + (isBurgerActive ? " " + s.nav_burgerActive : "")}>
                {navLinks}
            </ul>
        </nav>
    );
};
