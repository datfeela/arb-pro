import { useContext, useRef, useState } from "react";
import s from "./Header.module.scss";
import { AppContext } from "../../context";
import { Burger } from "../_generic/Burger/Burger";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { Actions } from "./Actions/Actions";
import { Nav } from "./Nav/Nav";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";
import { Dropdown } from "./Dropdown/Dropdown";

export const Header = ({ page }) => {
    const yaMetricsFn = () => {
        // eslint-disable-next-line no-undef
        ym(24445127, "reachGoal", "strategy-ostavit-zayavku");
    };

    const data = useContext(AppContext).state.layouts.header;

    // is burger menu active
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const toggleActivateBurger = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    // is search active
    const [isSearchActive, setIsSearchActive] = useState(false);
    const toggleActivateSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    // popup form
    const formData = data.form;
    const [isPopupActive, setIsPopupActive] = useState(false);
    const activatePopup = () => {
        setIsPopupActive(true);
    };
    const deactivatePopup = () => {
        setIsPopupActive(false);
    };

    const initialFormValues = {
        title_form: formData.title,
        name: "",
        phone: "",
        email: "",
        message: "Добрый день! Я хочу понять, куда двигаться дальше, прописать стратегию и подробный план действий на несколько лет вперед",
    };

    const submitForm = (data) => {
        if (data === "Y") {
            setIsPopupActive(false);
            alert("Заявка отправлена");
        }
    };

    const themeColor = page === "invincibility" && "brightGreen";

    return (
        <header className={s.headerFixed}>
            <div className={s.content + (page === "invincibility" ? " " + s.content_transparent : "")}>
                <div className={s.leftSide}>
                    <a className={s.logo} href="https://arb-pro.ru/">
                        <SvgSelector type={page === "invincibility" ? "headerLogoWhite" : "headerLogo"} />
                    </a>
                    <Burger color={themeColor} isBurgerActive={isBurgerActive} toggleActivate={toggleActivateBurger} />
                </div>
                <Nav color={themeColor} isBurgerActive={isBurgerActive} items={data.nav}></Nav>
                <Actions
                    color={themeColor}
                    buttonText={data.buttonText}
                    activatePopup={activatePopup}
                    isSearchActive={isSearchActive}
                    toggleActivateSearch={toggleActivateSearch}
                ></Actions>
            </div>
            <Dropdown
                color={themeColor}
                isBurgerActive={isBurgerActive}
                usefulList={data.menu.useful}
                aboutList={data.menu.about}
                contacts={data.menu.contacts}
                isSearchActive={isSearchActive}
                toggleActivateSearch={toggleActivateSearch}
                searchBlockData={data.search}
                contentLowRes={data.nav}
            />
            <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                <ContactForm
                    title={formData.title}
                    fields={formData.fields}
                    btnText={formData.submitBtn}
                    submitDesc={formData.submitDesc}
                    submitForm={submitForm}
                    initialFormValues={initialFormValues}
                    yaMetricsFn={yaMetricsFn}
                />
            </PopupFullScreen>
        </header>
    );
};
