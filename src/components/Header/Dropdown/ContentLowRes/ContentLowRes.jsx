import { useState } from "react";
import { NavItem } from "./NavItem/NavItem";
import s from "./ContentLowRes.module.scss";

export const ContentLowRes = ({ isBurgerActive, items, color }) => {
    const [activeItemId, setActiveItemId] = useState(null);

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
        <div className={s.wrap + (isBurgerActive ? " " + s.wrap_active : "") + (color === "brightGreen" ? " " + s.wrap_bright : "")}>
            <ul className={s.content}>{listItems}</ul>
        </div>
    );
};
