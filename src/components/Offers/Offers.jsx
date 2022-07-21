import { useContext } from "react";
import { AppContext } from "../../context";
import { Slider } from "./Slider/Slider";
import s from "./Offers.module.scss";

export const Offers = () => {
    const sliderData = useContext(AppContext).state.topSlider;
    const data = useContext(AppContext).state.offers;
    return (
        <>
            <div className={s.wrap}>
                <div className={s.wrapInner}>
                    <Slider data={sliderData} />
                </div>
            </div>
            <div className={s.wrap + ' ' + s.green}>
                <div className={s.wrapInner}>
                    <div className={s.ph} />
                </div>
            </div>
        </>
    );
};
