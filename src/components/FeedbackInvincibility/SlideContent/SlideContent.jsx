import s from "./SlideContent.module.scss";

export const SlideContent = ({ title, desc, id, imgSrc, videoSrc }) => {
    return (
        <div className={s.wrap}>
            <div className={s.video}>
                <iframe
                    loading="lazy"
                    title={`video${id}`}
                    allowfullscreen=""
                    scrolling="no"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    src={videoSrc}
                    // srcdoc={`
                    // <style>
                    //     *{padding:0;margin:0;overflow:hidden}
                    //     img{width: 100%; height: 100%}
                    // </style>
                    // <a href=${videoSrc}?autoplay=1>
                    //     <img src=${imgSrc}>
                    // </a>`}
                ></iframe>
            </div>
            <div className={s.content}>
                {title && <span className={s.title}>{title}</span>}
                {desc && <span className={s.desc}>{desc}</span>}
            </div>
        </div>
    );
};
