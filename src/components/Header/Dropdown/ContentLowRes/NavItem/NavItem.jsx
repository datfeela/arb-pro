import { useEffect, useRef } from "react";
import { setBlockHeight } from "../../../../../assets/utils/setBlockHeight";
import { SvgSelector } from "../../../../_generic/SvgSelector/SvgSelector";
import s from "./NavItem.module.scss";

export const NavItem = ({ id, name, link, list, activeItemId, setActiveItemId }) => {
    const contentRef = useRef();

    const isItemActive = id === activeItemId;

    useEffect(() => {
        if (contentRef.current) {
            if (isItemActive) {
                setBlockHeight(true, contentRef);
            } else setBlockHeight(false, contentRef);
        }
    }, [activeItemId]);

    const toggleIsActive = () => {
        if (isItemActive) setActiveItemId(null);
        else setActiveItemId(id);
    };

    return (
        <li className={s.wrap}>
            <div className={s.header}>
                <a className={s.link} href={link}>
                    {name}
                </a>
                {list && (
                    <>
                        <div onClick={toggleIsActive} className={isItemActive ? s.iconWrap + " " + s.iconWrap_active : s.iconWrap}>
                            <SvgSelector type="arrow" />
                        </div>
                    </>
                )}
            </div>
            {list && (
                <>
                    <div ref={contentRef} className={s.dropdown}>
                        <ul className={s.list}>
                            {list.map((item) => (
                                <li className={s.listItem}>
                                    <a href={item.link} className={s.link}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </li>
    );
};
