import s from "./Actions.module.scss";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Actions = ({ buttonText, activatePopup, toggleActivateSearch }) => {
    return (
        <div className={s.wrap}>
            <button onClick={toggleActivateSearch} className={s.searchButton}>
                <SvgSelector type="search" />
            </button>
            <button onClick={activatePopup} className={s.button}>
                <span>{buttonText}</span>
                <div className={s.iconPhone}>
                    <SvgSelector type={"phone"} />
                </div>
            </button>
        </div>
    );
};
