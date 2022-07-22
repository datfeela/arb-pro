import s from "./Nav.module.scss"

export const Nav = ({ items }) => {
    const navLinks = items.map((item) => {
        return <a className={s.link} href={item.link}>{item.name}</a>;
    });

    return <nav className={s.nav}>{navLinks}</nav>;
};
