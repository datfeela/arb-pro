import { useSwiper } from "swiper/react";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./SliderNavCircle.module.scss";

export const SliderNavCircle = () => {
    const swiper = useSwiper();

    return (
        <div className={s.nav}>
            <button
                onClick={() => {
                    swiper.slidePrev();
                }}
                className={s.navBtn + " " + s.prevBtn}
            >
                <SvgSelector type="arrowSlider" />
            </button>
            <button
                onClick={() => {
                    swiper.slideNext();
                }}
                className={s.navBtn + " " + s.nextBtn}
            >
                <SvgSelector type="arrowSlider" />
            </button>
        </div>
    );
};
