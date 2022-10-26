import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context";
import s from "./Sharing.module.scss";
import { SharingItem } from "./SharingItem/SharingItem";
import { parallaxMove, parallaxMoveInView } from "../../assets/utils/parallax";

export const Sharing = () => {
    const data = useContext(AppContext).state.layouts.invincibility.sharing;
    const { circleText, items } = { ...data };

    function scrollHandler() {
        titleRef.current && parallaxMoveInView({ target: titleRef.current, moveCoefY: 0.08, threshholdY: { min: 0, max: 50 } });
        imgRef.current && parallaxMoveInView({ target: imgRef.current, moveCoefY: -0.06, threshholdY: { min: -40, max: 0 } });
    }

    const titleRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", scrollHandler);
        scrollHandler();

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", scrollHandler);
        };
    }, []);

    const blocks = items.map((item, index) => <SharingItem key={index} id={index} title={item.title} desc={item.desc} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div ref={titleRef} className={s.circleTitle}>
                    <span className="title_md">{circleText}</span>
                </div>
                <div className={s.content}>
                    {blocks}
                    <div ref={imgRef} className={s.circleImg}>
                        <img src="invincibility/sharing/1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
