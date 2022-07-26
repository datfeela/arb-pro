import { useContext } from "react";
import s from "./Advantages.module.scss";
import { AppContext } from "../../context";
import { Advantage } from "./Advantage/Advantage";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";

export const Advantages = () => {
    const data = useContext(AppContext).state.advantages;
    const blocks = data.list.map((block) => {
        return <Advantage key={block.id} data={block} />;
    });

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.blocksWrap}>
                    <div className={s.blocksWrapInner}>
                        {blocks[0]}
                        {blocks[1]}
                    </div>
                    {blocks[2]}
                </div>
                <button className={s.button}>
                    <span className={s.text}>{data.button}</span>
                    <SvgSelector type="arrowCircle" />
                </button>
            </div>
        </div>
    );
};
