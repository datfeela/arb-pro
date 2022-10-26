import { useEffect, useRef, useState } from "react";
import { NavItem } from "./NavItem/NavItem";
import s from "./ContentLowRes.module.scss";
import { setBlockHeight } from "../../../../assets/utils/setBlockHeight";

export const ContentLowRes = ({ isBurgerActive, isWithMidResolution, items, color }) => {
    const [activeItemId, setActiveItemId] = useState(null);
    const [isWrapOuterOverflow, setIsWrapOuterOverflow] = useState(false);

    useEffect(() => {
        if (isBurgerActive) {
            setBlockHeight(true, contentRef);
        } else {
            setIsWrapOuterOverflow(false);
            setActiveItemId(null);
            setBlockHeight(false, contentRef);
        }
    }, [isBurgerActive]);

    useEffect(() => {
        if (isBurgerActive) {
            setTimeout(() => {
                setIsWrapOuterOverflow(true);
            }, 500);
        }
    }, [isBurgerActive]);

    const contentRef = useRef();

    const listItems = items.map((item) => (
        <NavItem
            key={item.id}
            id={item.id}
            name={item.name}
            link={item.link}
            list={item.list}
            activeItemId={activeItemId}
            setActiveItemId={setActiveItemId}
        />
    ));

    return (
        <div className={s.wrapOuter + (isWrapOuterOverflow ? " " + s.wrapOuter_overflow : "")} ref={contentRef}>
            <div
                className={
                    s.wrap +
                    (isBurgerActive ? " " + s.wrap_active : "") +
                    (color === "brightGreen" ? " " + s.wrap_bright : "") +
                    (isWithMidResolution ? " " + s.wrap_withMidRes : "")
                }
            >
                <ul className={s.content}>{listItems}</ul>
            </div>
        </div>
    );
};
