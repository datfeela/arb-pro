import s from "./SlideContent.module.scss";

export const SlideContent = ({ title, desc, link, index, imgSrc }) => {

    return (
        <div className={s.wrap}>
            <div className={s.video}>
                <iframe title={`video${index}`} allowfullscreen="" allow="autoplay" src={link} class="youtube__media js-youtube-api"></iframe>
            </div>
            <div className={s.content}>
                <span className={s.title}>{title}</span>
                <span className={s.desc}>{desc}</span>
            </div>
        </div>
    );
};
