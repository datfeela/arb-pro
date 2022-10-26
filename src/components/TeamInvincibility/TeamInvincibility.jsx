import { useContext } from "react";
import { AppContext } from "../../context";
import s from "./TeamInvincibility.module.scss";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Member } from "./Member/Member";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { SliderNavCircle } from "./SliderNavCircle/SliderNavCircle";
import { Particles } from "./Particles/Particles";

export const TeamInvincibility = () => {
    const data = useContext(AppContext).state.layouts.invincibility.team;
    const { title, members } = { ...data };

    // const slides = members.map((item, index) => <Member key={index} data={{ ...item }} id={index + 1} />);

    const slides = members.map((item, index) => (
        <SwiperSlide key={item.id}>
            <Member data={{ ...item }} id={index + 1} />
            <SliderNavCircle />
        </SwiperSlide>
    ));

    return (
        <div id="teamInvincibility" className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.header}>
                    <div className={s.titleIcon}>
                        <SvgSelector type="team" />
                    </div>
                    <ArticleTitle size="medium" title={title} />
                </div>
                <div className={s.slider}>
                    <Swiper
                        className={s.sliderMain}
                        modules={[Navigation]}
                        spaceBetween={23}
                        slidesPerView={1}
                        loop={true}
                        allowTouchMove={false}
                        speed={1200}
                        navigation={true}
                    >
                        {slides}
                    </Swiper>
                    <Particles />
                </div>
            </div>
        </div>
    );
};
