import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper"; //SwiperCore,
import "swiper/css";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import s from "./Clients.module.scss";

SwiperCore.use([Autoplay]);

export const Clients = () => {
    const data = useContext(AppContext).state.layouts.invincibility.clients;
    const { title1, title2, items } = { ...data };

    let clientsItems = items.map((item, index) => (
        <SwiperSlide key={index + 1} order={item.order}>
            <div className={s.imgWrap}>
                <img draggable="false" key={index} className={s.img} src={`invincibility/clients/${index + 1}.png`} alt={item.title}></img>
            </div>
        </SwiperSlide>
    ));
    clientsItems = clientsItems.sort((a, b) => {
        if (a.props.order > b.props.order) return 1;
        if (a.props.order < b.props.order) return -1;
        return 0;
    });

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.header}>
                    <div className={s.titleWrap}>
                        <ArticleTitle size="medium" title={title1} />
                    </div>
                    <ArticleTitle size="medium" title={title2} />
                </div>
                <div className={s.slider}>
                    <Swiper
                        allowTouchMove={false}
                        id="clients"
                        slidesPerView={"auto"}
                        slidesPerGroupAuto={true}
                        spaceBetween={45}
                        freeMode={true}
                        loop={true}
                        loopedSlides={items.length}
                        speed={15000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                        }}
                    >
                        {clientsItems}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
