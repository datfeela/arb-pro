import s from "./Contacts.module.scss";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";

export const Contacts = ({ contacts }) => {
    return (
        <div className={s.wrap}>
            <div className={s.linksWrap}>
                <a className={s.linkContact} href={contacts.phone.link}>
                    {contacts.phone.title}
                </a>
                <a className={s.linkContact} href={contacts.email.link}>
                    {contacts.email.title}
                </a>
            </div>
            <div className={s.linksWrapSocials}>
                <a target="_blank" rel="noreferrer" className={s.linkSocial + " " + s.linkSocial_WA} href={contacts.socials.WA}>
                    <SvgSelector type="WA" />
                </a>
                <a target="_blank" rel="noreferrer" className={s.linkSocial + " " + s.linkSocial_TG} href={contacts.socials.TG}>
                    <SvgSelector type="TG" />
                </a>
                <a target="_blank" rel="noreferrer" className={s.linkSocial + " " + s.linkSocial_YT} href={contacts.socials.YT}>
                    <SvgSelector type="YT" />
                </a>
                <a target="_blank" rel="noreferrer" className={s.linkSocial + " " + s.linkSocial_VK} href={contacts.socials.VK}>
                    <SvgSelector type="VK" />
                </a>
            </div>
        </div>
    );
};
