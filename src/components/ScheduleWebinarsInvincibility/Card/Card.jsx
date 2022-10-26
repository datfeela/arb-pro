import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./Card.module.scss";

export const Card = ({ title, hosts, type, date, activatePopup, setWantedWebinar }) => {
    const hostsImages = [];
    const hostsNames = [];
    const isWebinar = type === "webinar";

    hosts.forEach((item) => {
        hostsImages.push(<img src={`invincibility/webinars/${item.img}`} alt={item.img}></img>);
        hostsNames.push(<span>{item.name}</span>);
    });

    const handleButtonClick = () => {
        setWantedWebinar(title);
        activatePopup();
    };

    return (
        <div className={s.wrap}>
            <div className={s.header + (isWebinar && date ? " " + s.header_withDate : "")}>
                {isWebinar && date && (
                    <div className={s.date}>
                        <div className={s.date__row}>
                            <SvgSelector type="dateCalendar" />
                            <span>
                                {date.day} {date.month} {date.year}
                            </span>
                        </div>
                        <div className={s.date__row}>
                            <SvgSelector type="dateClock" />
                            <span>{date.timeInterval}</span>
                        </div>
                    </div>
                )}
                <span className={s.title}>{title}</span>
            </div>
            <div className={s.content}>
                <div className={s.hosts}>
                    <div className={s.hosts__images}>{hostsImages}</div>
                    <div className={s.hosts__names}>{hostsNames}</div>
                </div>
                <button onClick={handleButtonClick} className={s.button + " " + (isWebinar ? s.button_webinar : s.button_replay)}>
                    <SvgSelector type={isWebinar ? "bell" : "camera"} />
                    <span className={s.button__text}>{isWebinar ? "Пойти на вебинар" : "Посмотреть запись"}</span>
                </button>
            </div>
        </div>
    );
};
