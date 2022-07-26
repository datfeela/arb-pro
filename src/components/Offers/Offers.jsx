import { useContext } from "react";
import { AppContext } from "../../context";
import { Slider } from "./Slider/Slider";
import s from "./Offers.module.scss";
import { OffersList } from "./OffersList/OffersList";

export const Offers = () => {
    const sliderData = useContext(AppContext).state.topSlider;
    const data = useContext(AppContext).state.offers;
    return (
        <>
            <div className={s.wrap + " wrap"}>
                <div className={"wrapInner"}>
                    <Slider data={sliderData} />
                </div>
            </div>
            <div className={s.wrap + " wrap " + s.green}>
                <div className={"wrapInner"}>
                    <OffersList data={data} />
                </div>
            </div>
        </>
    );
};
