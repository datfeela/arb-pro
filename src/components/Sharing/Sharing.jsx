import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context";
import s from "./Sharing.module.scss";
import { SharingItem } from "./SharingItem/SharingItem";
import { parallaxMove } from "../../assets/utils/parallax";

export const Sharing = () => {
    const data = useContext(AppContext).state.layouts.invincibility.sharing;
    const { circleText, items } = { ...data };

    function scrollHandler() {
        titleRef.current && parallaxMove({ target: titleRef.current, moveCoef: -0.05 });
        imgRef.current && parallaxMove({ target: imgRef.current, moveCoef: 0.05 });
    }

    const titleRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        document.body.addEventListener("scroll", scrollHandler);
        document.body.addEventListener("resize", scrollHandler);
        scrollHandler();

        return () => {
            document.body.removeEventListener("scroll", scrollHandler);
            document.body.removeEventListener("resize", scrollHandler);
        };
    }, []);

    const blocks = items.map((item, index) => <SharingItem key={index} id={index} title={item.title} desc={item.desc} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div ref={titleRef} className={s.circleTitle}>
                    <span className="titleMd">{circleText}</span>
                </div>
                <div className={s.content}>
                    {blocks}
                    <div ref={imgRef} className={s.circleImg}>
                        <img src="/invincibility/sharing/1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
