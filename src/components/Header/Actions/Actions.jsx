import s from "./Actions.module.scss";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Actions = ({ buttonText, activatePopup, toggleActivateSearch, color, secondaryColor }) => {
    return (
        <div className={s.wrap}>
            <button onClick={toggleActivateSearch} className={s.searchButton + (color === "brightGreen" ? " " + s.searchButton_bright : "")}>
                <SvgSelector type="search" />
            </button>
            <button
                onClick={activatePopup}
                className={
                    s.button +
                    (color === "brightGreen" ? " " + s.button_hoverBright : "") +
                    (secondaryColor === "pink" ? " " + s.button_pink : "")
                }
            >
                <span>{buttonText}</span>
                <div className={s.iconPhone}>
                    <SvgSelector type={"phone"} />
                </div>
            </button>
        </div>
    );
};
