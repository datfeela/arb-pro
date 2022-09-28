import { useRef } from "react";
import { setBlockHeight } from "../../../../assets/utils/setBlockHeight";
import { SvgSelector } from "../../../_generic/SvgSelector/SvgSelector";
import { Dropdown } from "./Dropdown/Dropdown";
import s from "./NavItem.module.scss";

export const NavItem = ({ item, color }) => {
    let itemClass = s.item;
    if (item.list) itemClass += " " + s.item_withSublist;
    else itemClass += " " + s.item_empty;

    const contentRef = useRef();

    return (
        <li
            onMouseEnter={() => {
                item.list && setBlockHeight(true, contentRef);
            }}
            onMouseLeave={() => {
                item.list && setBlockHeight(false, contentRef);
            }}
            className={itemClass}
        >
            <a className={s.link + (color === "brightGreen" ? " " + s.link_bright : "")} href={item.link}>
                {item.name}
            </a>
            {item.list && (
                <>
                    <div className={s.iconWrap + (color === "brightGreen" ? " " + s.iconWrap_bright : "")}>
                        <SvgSelector type="arrow" />
                    </div>
                    <Dropdown contentRef={contentRef} item={item} />
                </>
            )}
        </li>
    );
};
