import { useContext } from "react";
import { AppContext } from "../../context";
import s from "./Materials.module.scss";
import geometryComposition from "../../assets/animations/geometryComposition.json";
import Lottie from "lottie-react";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";

export const Materials = () => {
    const data = useContext(AppContext).state.layouts.invincibility.materials;
    const { title, desc } = { ...data };

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.wrapInner + " wrapInner"}>
                <div className={s.content}>
                    <h2 className={s.title}>{title[0].text}</h2>
                    <div className={s.desc}>
                        <SvgSelector type="bookmark" />
                        <span>{desc}</span>
                    </div>
                </div>
                <div className={s.animationWrap}>
                    <Lottie animationData={geometryComposition} />
                </div>
            </div>
        </div>
    );
};
