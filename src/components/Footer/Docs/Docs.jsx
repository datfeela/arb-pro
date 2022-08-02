import s from "./Docs.module.scss";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Docs = ({ docs }) => {
    return (
        <div className={s.wrap}>
            <a className={s.link} target="_blank" rel="noreferrer" href={docs.booklet.link}>
                <SvgSelector type="pdf-down" />
                <div className={s.textWrap}>
                    {docs.booklet.title.map((item) => (
                        <span className={s.text}>{item}</span>
                    ))}
                </div>
            </a>
            <a className={s.link} target="_blank" rel="noreferrer" href={docs.logo.link}>
                <SvgSelector type="logo-down" />
                <div className={s.textWrap}>
                    {docs.logo.title.map((item) => (
                        <span className={s.text}>{item}</span>
                    ))}
                </div>
            </a>
        </div>
    );
};


