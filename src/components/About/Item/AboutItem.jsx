import s from "./AboutItem.module.scss";

export const AboutItem = ({ num, textTop, desc }) => {
    return (
        <div className={s.wrap}>
            <div className={s.header}>
                <span className={s.num}>{num}</span>
                <div className={s.textWrap}>
                    <span className={s.plus}>+</span>
                    <span className={s.text + " " + s.text_highRes}>{textTop}</span>
                </div>
            </div>
            <span className={s.text + " " + s.text_lowRes}>{textTop}</span>
            <span className={s.text + " " + s.text_desc}>{desc}</span>
        </div>
    );
};
