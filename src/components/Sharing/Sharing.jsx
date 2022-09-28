import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useContext } from "react";
import { AppContext } from "../../context";
import s from "./Sharing.module.scss";
import { SharingItem } from "./SharingItem/SharingItem";

export const Sharing = () => {
    const data = useContext(AppContext).state.layouts.invincibility.sharing;
    const { circleText, items } = { ...data };

    const blocks = items.map((item, index) => <SharingItem key={index} id={index} title={item.title} desc={item.desc} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.circleTitle}>
                    <span className="titleMd">{circleText}</span>
                </div>
                <div className={s.content}>
                    {blocks}
                    <div className={s.circleImg}>
                        <img src="/invincibility/sharing/1.png" alt="" />
                    </div>
                </div>
            </div>
            <Parallax pages={2}>
                <ParallaxLayer offset={1}>
                    <h2 className="title">test</h2>
                </ParallaxLayer>
                <ParallaxLayer>
                    <h2 className="title">test2</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};
