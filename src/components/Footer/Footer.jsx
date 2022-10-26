import { useContext, useState } from "react";
import s from "./Footer.module.scss";
import { AppContext } from "../../context";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { Contacts } from "./Contacts/Contacts";
import { Docs } from "./Docs/Docs";
import { Nav } from "./Nav/Nav";

export const Footer = ({ secondaryColor }) => {
    const data = useContext(AppContext).state.layouts.footer;

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
                <Docs docs={data.docs} color={secondaryColor} />
                <span className={s.license}>{data.license.copyright}</span>
                <a target="_blank" rel="noreferrer" className={s.link} href={data.license.privacy.link}>
                    <span className={s.license}>{data.license.privacy.title}</span>
                </a>
            </div>
            <a href="#top">
                <button className={s.scrollUpBtn + (secondaryColor === "pink" ? " " + s.scrollUpBtn_pink : "")}>
                    <SvgSelector type="arrowLg" />
                </button>
            </a>
        </footer>
    );
};
