import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper"; //SwiperCore,
import "swiper/css";
import { SlideContent } from "./SlideContent/SlideContent";
import s from "./Carousel.module.scss";

SwiperCore.use([Autoplay]);

export const Carousel = ({ slides }) => {
    let slidesArr = slides.map((slide) => (
        <SwiperSlide key={slide.id}>
            <SlideContent content={slide} />
        </SwiperSlide>
    ));
    return (
        <div className={s.wrapOuter}>
            <div className={s.wrap}>
                <Swiper
                    id="main"
                    spaceBetween={23}
                    slidesPerView={2}
                    loop={true}
                    grabCursor={true}
                    speed={2500}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        500: {
                            slidesPerView: 3,
                        },
                        780: {
                            slidesPerView: 4,
                        },
                        900: {
                            slidesPerView: 3,
                        },
                        1120: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {slidesArr}
                </Swiper>
            </div>
        </div>
    );
};
