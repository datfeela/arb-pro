import { useContext, useState } from "react";
import s from "./Footer.module.scss";
import { AppContext } from "../../context";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { Contacts } from "./Contacts/Contacts";
import { Docs } from "./Docs/Docs";
import { Nav } from "./Nav/Nav";

export const Footer = () => {
    const data = useContext(AppContext).state.footer;

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className={s.footer}>
            <div className={s.content}>
                <div className={s.navs}>
                    <Nav title={data.nav.title} items={data.nav.items} />
                    <Nav title={data.navAbout.title} items={data.navAbout.items} />
                </div>
                <Contacts contacts={data.contacts} />
                <div className={s.logoWrap}>
                    <SvgSelector type="footer-logo" />
                </div>
                <Docs docs={data.docs} />
                <span className={s.license}>{data.license.copyright}</span>
                <a target="_blank" rel="noreferrer" className={s.link} href={data.license.privacy.link}>
                    <span className={s.license}>{data.license.privacy.title}</span>
                </a>
            </div>
            <a href="#top">
                <button className={s.scrollUpBtn}>
                    <SvgSelector type="arrowLg" />
                </button>
            </a>
        </footer>
    );
};
