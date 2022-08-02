import s from "./Burger.module.scss";

export const Burger = ({ isBurgerActive, toggleActivate }) => {
    return (
        <div onClick={toggleActivate} className={isBurgerActive ? s.wrap + " " + s.wrap_active : s.wrap}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
