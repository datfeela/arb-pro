import { useEffect, useRef } from "react";
import { setBlockHeight } from "../../../../assets/utils/setBlockHeight";
import { SvgSelector } from "../../../_generic/SvgSelector/SvgSelector";
import s from "./ContentHighRes.module.scss";

export const ContentHighRes = ({ isBurgerActive, usefulList, aboutList, contacts, color }) => {
    const usefulItems = usefulList.items.map((item, index) => (
        <li className={item.icon ? s.item + " " + s.item_withIcon : s.item} key={index}>
            <a href={item.link} className={s.link}>
                {item.icon && <SvgSelector type={item.icon} />}
                {item.title}
            </a>
        </li>
    ));

    const aboutItems = aboutList.items.map((item, index) => {
        return (
            <li className={item.icon ? s.item + " " + s.item_withIcon : s.item} key={index}>
                <a href={item.link} className={s.link}>
                    {item.icon && <SvgSelector type={item.icon} />}
                    {item.title}
                </a>
            </li>
        );
    });

    const contentRef = useRef();

    useEffect(() => {
        if (isBurgerActive) {
            setBlockHeight(true, contentRef);
        } else setBlockHeight(false, contentRef);
    }, [isBurgerActive]);

    return (
        <div ref={contentRef} className={s.wrapAbsolute + (color === "brightGreen" ? " " + s.wrapAbsolute_bright : "")}>
            <div className={s.wrap}>
                <div className={s.listWrap + " " + s.listWrap_useful}>
                    <h3 className={s.title}>{usefulList.title}</h3>
                    <ul className={s.list}>{usefulItems}</ul>
                </div>
                <div className={s.listWrap + " " + s.listWrap_about}>
                    <h3 className={s.title}>{aboutList.title}</h3>
                    <ul className={s.list}>{aboutItems}</ul>
                </div>
                <div className={s.contacts}>
                    <a href={contacts.phone.link} className={s.contactsLink}>
                        {contacts.phone.text}
                    </a>
                    <a href={contacts.mail.link} className={s.contactsLink}>
                        {contacts.mail.text}
                    </a>
                    <div className={s.socials}>
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
            </div>
        </div>
    );
};
