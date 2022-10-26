import { useEffect, useRef } from "react";
import { parallaxCustomized } from "../../../../assets/utils/parallax";
import s from "./Particle.module.scss";

export const Particle = ({ type, color, threshholdX, threshholdY, parentRef }) => {
    function scrollHandler() {
        ref.current &&
            parallaxCustomized({
                targetRef: ref.current,
                parentRef: parentRef,
                threshholdX: threshholdX,
                threshholdY: threshholdY,
                transitionSpeed: 0.8,
                firstAnimationFrame: 0.6,
            });
    }

    const ref = useRef();

    useEffect(() => {
        if (parentRef) {
            window.addEventListener("scroll", scrollHandler);
            window.addEventListener("resize", scrollHandler);
            scrollHandler();
        }

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", scrollHandler);
        };
    }, [parentRef]);

    // classNames
    let classByType;
    switch (type) {
        case "circle":
            classByType = s.circle;
            break;
        case "rhomb":
            classByType = s.rhomb;
            break;
        case "rectangleHorizontal":
            classByType = s.rectangleX;
            break;
        case "rectangleVertical":
            classByType = s.rectangleY;
            break;
        default:
            classByType = "";
            break;
    }

    let classByColor;
    switch (color) {
        case "green":
            classByColor = s.green;
            break;
        case "red":
            classByColor = s.red;
            break;
        case "grey":
            classByColor = s.grey;
            break;
        case "white":
            classByColor = s.white;
            break;
        default:
            classByColor = "";
            break;
    }
    let particleClass = s.particle + " " + classByType + " " + classByColor;

    return (
        <div className={s.wrap} ref={ref}>
            <span className={particleClass}></span>
        </div>
    );
};
