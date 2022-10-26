import { useContext, useEffect, useRef } from "react";
import s from "./VideosBasicStrategies.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { parallaxCustomized } from "../../assets/utils/parallax";

export const VideosBasicStrategies = () => {
    const data = useContext(AppContext).state.layouts.basicStrategiesRecordsSale.videos;

    const elements = data.map((item, index) => (
        <div key={index} className={s.itemWrapInner + " wrapInner"}>
            <div className={s.videoHeader}>
                <div className={s.numberWrap}>
                    <span className={s.index}>{index + 1}</span>
                    <span className={s.itemsQuantity}>/{data.length}</span>
                </div>
                <ArticleTitle title={item.title} size="small" />
            </div>
            <div className={s.video}>
                <img src="https://placehold.co/1000x800/D8055B/white" alt="" />
            </div>
        </div>
    ));

    // parallax

    function scrollHandler() {
        figurePurple1.current &&
            parallaxCustomized({
                targetRef: figurePurple1.current,
                parentRef: parentPurple1.current,
                threshholdX: 0,
                threshholdY: -400,
                transitionSpeed: 1,
                firstAnimationFrame: 0,
            });
        figureGreen1.current &&
            parallaxCustomized({
                targetRef: figureGreen1.current,
                parentRef: parentGreen1.current,
                threshholdX: 0,
                threshholdY: 200,
                transitionSpeed: 1,
                firstAnimationFrame: 0,
            });
        figureBlue.current &&
            parallaxCustomized({
                targetRef: figureBlue.current,
                parentRef: parentBlue.current,
                threshholdX: 0,
                threshholdY: -350,
                transitionSpeed: 1,
                firstAnimationFrame: 0,
            });
        figureBlack.current &&
            parallaxCustomized({
                targetRef: figureBlack.current,
                parentRef: parentBlack.current,
                threshholdX: 0,
                threshholdY: -500,
                transitionSpeed: 1,
                firstAnimationFrame: 0,
            });
        figureGreen2.current &&
            parallaxCustomized({
                targetRef: figureGreen2.current,
                parentRef: parentGreen2.current,
                threshholdX: 0,
                threshholdY: -400,
                transitionSpeed: 1,
                firstAnimationFrame: 0,
            });
        figurePurple2.current &&
            parallaxCustomized({
                targetRef: figurePurple2.current,
                parentRef: parentPurple2.current,
                threshholdX: 0,
                threshholdY: 300,
                transitionSpeed: 1,
                firstAnimationFrame: 0,
            });
    }

    const figurePurple1 = useRef();
    const parentPurple1 = useRef();

    const figureGreen1 = useRef();
    const parentGreen1 = useRef();

    const figureBlue = useRef();
    const parentBlue = useRef();

    const figureBlack = useRef();
    const parentBlack = useRef();

    const figureGreen2 = useRef();
    const parentGreen2 = useRef();

    const figurePurple2 = useRef();
    const parentPurple2 = useRef();

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", scrollHandler);
        scrollHandler();

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", scrollHandler);
        };
    }, []);

    //

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.item}>
                {elements[0]}
                <div ref={parentGreen1} className={s.figure + " " + s.figure_green1}>
                    <div ref={figureGreen1}>
                        <SvgSelector type="figureGreenBasicStrategies" />
                    </div>
                </div>
                <div ref={parentPurple1} className={s.figure + " " + s.figure_purple}>
                    <div ref={figurePurple1}>
                        <SvgSelector type="figurePurpleBasicStrategies" />
                    </div>
                </div>
            </div>
            <div className={s.item}>
                {elements[1]}
                <div ref={parentBlue} className={s.figure + " " + s.figure_blue}>
                    <div ref={figureBlue}>
                        <SvgSelector type="figureBlueBasicStrategies" />
                    </div>
                </div>
            </div>
            <div className={s.item + " " + s.item_fullscreen}>
                {elements[2]}
                <div ref={parentBlack} className={s.figure + " " + s.figure_black}>
                    <div ref={figureBlack}>
                        <SvgSelector type="rectangleBasicStrategies" />
                    </div>
                </div>
            </div>
            <div className={s.item}>{elements[3]}</div>
            <div className={s.item}>
                {elements[4]}
                <div ref={parentGreen2} className={s.figure + " " + s.figure_green2}>
                    <div ref={figureGreen2}>
                        <SvgSelector type="figureGreenBasicStrategies" />
                    </div>
                </div>
                <div ref={parentPurple2} className={s.figure + " " + s.figure_purple}>
                    <div ref={figurePurple2}>
                        <SvgSelector type="figurePurpleBasicStrategies" />
                    </div>
                </div>
            </div>
            <div className={s.item}>{elements[5]}</div>
        </div>
    );
};
