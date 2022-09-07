// import { useState } from "react";
import s from "./FeedbackItem.module.scss";

export const FeedbackItem = ({ id, name, desc, text, textExtended }) => {
    // debugger;
    // const [isExpanded, setIsExpanded] = useState(false);

    // const handleBtnClick = () => {
    //     setIsExpanded(true);
    // };

    return (
        <div className={s.wrap}>
            <div className={s.header}>
                <img src={`StrategicPlanning/feedback/${id}.png`} alt="" className={s.image} />
                <div className={s.info}>
                    <span className={s.name}>{name}</span>
                    <span className={s.desc}>{desc}</span>
                </div>
            </div>
            <div className={s.content}>
                <span className={s.text}>{text}</span>
                {/* <span className={isExpanded ? s.text : s.text + " " + s.text_hidden}>{textExtended}</span> */}
            </div>
            {/* <button onClick={handleBtnClick} className={isExpanded ? s.expandBtn + " " + s.expandBtn_hidden : s.expandBtn}>
                Читать полностью
            </button> */}
        </div>
    );
};
