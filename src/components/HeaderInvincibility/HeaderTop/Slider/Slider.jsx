import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper"; //SwiperCore,
import "swiper/css";
import s from "./Slider.module.scss";

SwiperCore.use([Autoplay]);

export const Slider = ({ slidesCount }) => {
    let slidesArr = [];
    for (let i = 0; i < slidesCount; i++) {
        slidesArr.push(
            <SwiperSlide>
                <div className={s.slide}>
                    <img className={s.img + " " + s.img1} src={`invincibility/header/${i + 1}-1.png`} alt="" />
                    <img className={s.img + " " + s.img2} src={`invincibility/header/${i + 1}-2.png`} alt="" />
                    <img className={s.img + " " + s.img3} src={`invincibility/header/${i + 1}-3.png`} alt="" />
                </div>
            </SwiperSlide>
        );
    }

    return (
        <div className={s.wrap}>
            <Swiper
                spaceBetween={60}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                speed={1500}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
            >
                {slidesArr}
            </Swiper>
        </div>
    );
};
