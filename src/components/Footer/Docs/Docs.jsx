import s from "./Docs.module.scss";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Docs = ({ docs, color }) => {
    const linkClassName = s.link + (color === "pink" ? " " + s.link_pink : "");

    return (
        <div className={s.wrap}>
            <a className={linkClassName} target="_blank" rel="noreferrer" href={docs.booklet.link}>
                <SvgSelector type="pdf-down" />
                <div className={s.textWrap}>
                    {docs.booklet.title.map((item, index) => (
                        <span className={s.text} key={index}>
                            {item}
                        </span>
                    ))}
                </div>
            </a>
            <a className={linkClassName} target="_blank" rel="noreferrer" href={docs.logo.link}>
                <SvgSelector type="logo-down" />
                <div className={s.textWrap}>
                    {docs.logo.title.map((item, index) => (
                        <span className={s.text} key={index}>
                            {item}
                        </span>
                    ))}
                </div>
            </a>
        </div>
    );
};
