import s from "./SlideContent.module.scss";

export const SlideContent = ({ content }) => {
    return (
        <div className={s.wrap}>
            <div className={s.textWrap}>
                <span className={s.circle}></span>
                <div className={s.nameWrap}>
                    <span className={s.name}>{content.name}</span>
                    <span className={s.surname}>{content.surname}</span>
                </div>
            </div>
            {/* <img src={`StrategicPlanning/TopSlider/${content.id}.png`} alt="" /> */}
            <img className={s.image} src={`StrategicPlanning/TopSlider/1.png`} alt="" />
        </div>
    );
};
