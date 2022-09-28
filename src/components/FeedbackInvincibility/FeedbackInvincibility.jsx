import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import s from "./FeedbackInvincibility.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Thumbs } from "swiper";
import "swiper/css";
import { SlideContent } from "./SlideContent/SlideContent";
import { SliderNav } from "./SlideContent/SliderNav/SliderNav";

SwiperCore.use([Autoplay]);

export const FeedbackInvincibility = () => {
    const data = useContext(AppContext).state.layouts.invincibility.feedback;
    const { items, title } = { ...data };
    const slides = [];
    const imageSlides = [];

    items.forEach((slide, index) => {
        slides.push(
            <SwiperSlide key={slide.id}>
                <SlideContent title={slide.title} desc={slide.desc} link={slide.link} id={index} imgSrc={`/invincibility/slider/${index}.jpg`} />
            </SwiperSlide>
        );
        imageSlides.push(
            <SwiperSlide key={slide.id}>
                <img className={s.previewImg} src={`/invincibility/slider/${index}.jpg`} alt="" />
            </SwiperSlide>
        );
    });

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                    <div className={s.icon}>
                        <SvgSelector type="feedbackGraph" />
                    </div>
                    <ArticleTitle size="medium" title={title} />
                </div>
                <div className={s.sliderWrap}>
                    <Swiper
                        className={s.sliderMain}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Navigation, Thumbs]}
                        spaceBetween={23}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        speed={1200}
                        navigation={true}
                    >
                        {slides}
                        <SliderNav />
                    </Swiper>
                </div>
                <div className={s.sliderWrap}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={40}
                        className={s.sliderThumbs}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[Navigation, Thumbs]}
                        grabCursor={true}
                        breakpoints={{
                            875: {
                                slidesPerView: 4,
                            },
                            1120: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {imageSlides}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
