import { useEffect, useState } from "react";
import { Burger } from "../../_generic/Burger/Burger";
import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./Left.module.scss";

export const Left = ({ page, color, isBurgerActive, toggleActivateBurger }) => {
    const isInvinPage = page === "invincibility";
    const isBasicPage = page === "basicStrategies";

    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        window.pageYOffset > 20 ? setIsScrolling(true) : setIsScrolling(false);
    };

    useEffect(() => {
        if (isBasicPage) {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleScroll);
        }

        return () => {
            if (isBasicPage) {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleScroll);
            }
        };
    }, []);

    return (
        <div className={s.leftSide + (isScrolling ? " " + s.leftSide_scrolling : "")}>
            <a className={s.logo + (isBasicPage ? " " + s.logo_basic : "")} href="https://arb-pro.ru/">
                {isBasicPage && (
                    <div className={s.logo__basicIconWrap}>
                        <SvgSelector type={"headerLogoBasic"} />
                    </div>
                )}
                <SvgSelector type={isInvinPage ? "headerLogoWhite" : isBasicPage ? "headerLogoWithText" : "headerLogo"} />
                {/* <SvgSelector type="headerLogoWhite" /> */}
            </a>
            <div className={s.burgerWrap + (isBasicPage ? " " + s.burgerWrap_basic : "")}>
                <Burger color={color} isBurgerActive={isBurgerActive} toggleActivate={toggleActivateBurger} />
            </div>
        </div>
    );
};
