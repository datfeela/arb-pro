import { useContext, useEffect, useRef } from "react";
import s from "./BannerBasicStrategies.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { parallaxMoveInView } from "../../assets/utils/parallax";

export const BannerBasicStrategies = () => {
    const data = useContext(AppContext).state.layouts.basicStrategiesRecordsSale.banner;

    // parallax

    function scrollHandler() {
        playRef.current && parallaxBasic({ ref: playRef.current, threshhold: 75 });
        videoRef.current && parallaxBasic({ ref: videoRef.current, threshhold: -75 });
    }

    const videoRef = useRef();
    const playRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", scrollHandler);
        scrollHandler();

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", scrollHandler);
        };
    }, []);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} h1={true} />
                </div>
                <div ref={videoRef} className={s.iconVideo}>
                    <SvgSelector type="videoBasicStrategies" />
                </div>
                <div ref={playRef} className={s.iconPlay}>
                    <SvgSelector type="playBasicStrategies" />
                </div>
            </div>
        </div>
    );
};

const parallaxBasic = ({ ref, threshhold }) => {
    const rect = ref.getBoundingClientRect();
    let move

    if (rect.bottom < 0) return
    move = (1 - rect.bottom / (rect.bottom + window.pageYOffset)) * threshhold

    ref.style.transform = `translateY(${move}px)`;
}