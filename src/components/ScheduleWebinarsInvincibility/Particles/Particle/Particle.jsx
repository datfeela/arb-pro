import { useEffect, useRef } from "react";
import styled from "styled-components";
import { parallaxCustomized } from "../../../../assets/utils/parallax";
import s from "./Particle.module.scss";

export const Particle = ({ type, color, x, y, threshholdX, threshholdY, parentRef, imgSrc }) => {
    function scrollHandler() {
        ref.current &&
            parallaxCustomized({
                targetRef: ref.current,
                parentRef: parentRef,
                threshholdX: threshholdX,
                threshholdY: threshholdY,
                transitionSpeed: 0.7,
                firstAnimationFrame: 0,
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
        <Wrap x={x} y={y} ref={ref} type={type}>
            {type !== "img" && <span className={particleClass}></span>}
            {type === "img" && <img className={s.img} src={`invincibility/webinars/${imgSrc}`} alt=""></img>}
        </Wrap>
    );
};

const Wrap = styled.div`
    transition: all 0.8s ease 0s;
    position: absolute;
    top: ${(props) => `${props.y}px`};
    left: ${(props) => `${props.x}px`};
    z-index: ${(props) => (props.type === "img" ? 1 : 0)};

    @media (max-width: 1120px) {
        left: ${(props) => `${props.x * 0.84}px`};
    }

    @media (max-width: 900px) {
        left: ${(props) => `${props.x / 5.6}vw`};
    }

    @media (max-width: 480px) {
        left: ${(props) => `${props.x / 6}vw`};
    }
`;
