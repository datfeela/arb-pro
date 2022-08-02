import { NavItem } from "./Item/NavItem";
import s from "./Nav.module.scss";

export const Nav = ({ items, isBurgerActive }) => {
    const navLinks = items.map((item) => <NavItem item={item} />);

    // return <nav className={isBurgerActive ? s.nav + " " + s.nav_burgerActive : s.nav}>{navLinks}</nav>;
    return (
        <nav>
            <ul className={isBurgerActive ? s.nav + " " + s.nav_burgerActive : s.nav}>{navLinks}</ul>
        </nav>
    );
};
