import s from "./Burger.module.scss";

export const Burger = ({ isBurgerActive, toggleActivate, color }) => {
    return (
        <div
            onClick={toggleActivate}
            className={s.wrap + (isBurgerActive ? " " + s.wrap_active : "") + (color === "brightGreen" ? " " + s.wrap_bright : "")}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
