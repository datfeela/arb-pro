import { useEffect, useRef, useState } from "react";
import { List } from "../../_generic/List/List";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./QAItem.module.scss";
import { setBlockHeight } from "../../../assets/utils/setBlockHeight";

export const QAItem = ({ id, title, desc, list, activeItemId, setActiveItemId }) => {
    const [isExpanded, setIsExpanded] = useState(id === activeItemId);
    const contentRef = useRef();

    useEffect(() => {
        if (isExpanded) {
            setBlockHeight(true, contentRef);
            setActiveItemId(id);
        } else setBlockHeight(false, contentRef);
    }, [isExpanded]);

    useEffect(() => {
        if (activeItemId !== id && isExpanded) {
            toggleIsExpanded();
        }
    }, [activeItemId]);

    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={s.wrap}>
            <div className={s.header}>
                <span className={s.title}>{title}</span>
                <div onClick={toggleIsExpanded} className={isExpanded ? s.icon + " " + s.icon_rotate : s.icon}>
                    <SvgSelector type="arrowLg" />
                </div>
            </div>
            <div ref={contentRef} className={isExpanded ? s.content : s.content + " " + s.content_hidden}>
                <span className={s.desc}>{desc}</span>
                <List items={list} font="small" />
            </div>
        </div>
    );
};
