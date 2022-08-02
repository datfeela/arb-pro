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

export const Header = () => {
    const data = useContext(AppContext).state.header;

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
    const formData = useContext(AppContext).state.contact.form;
    const [isPopupActive, setIsPopupActive] = useState(false);
    const activatePopup = () => {
        setIsPopupActive(true);
    };
    const deactivatePopup = () => {
        setIsPopupActive(false);
    };
    const initialFormValues = { name: "", phone: "", email: "", message: "" };
    const submitForm = (values) => {
        console.log(values);
    };
    //

    return (
        <header className={s.headerFixed}>
            <div className={s.content}>
                <div className={s.leftSide}>
                    <a className={s.logo} href="https://arb-pro.ru/">
                        <SvgSelector type="headerLogo" />
                    </a>
                    <Burger isBurgerActive={isBurgerActive} toggleActivate={toggleActivateBurger} />
                </div>
                <Nav isBurgerActive={isBurgerActive} items={data.nav}></Nav>
                <Actions
                    buttonText={data.buttonText}
                    activatePopup={activatePopup}
                    isSearchActive={isSearchActive}
                    toggleActivateSearch={toggleActivateSearch}
                ></Actions>
            </div>
            <Dropdown
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
                    fields={formData.fields}
                    btnText={formData.submitBtn}
                    submitDesc={formData.submitDesc}
                    submitForm={submitForm}
                    initialFormValues={initialFormValues}
                />
            </PopupFullScreen>
        </header>
    );
};
