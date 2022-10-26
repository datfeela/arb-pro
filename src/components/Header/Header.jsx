import { useContext, useState } from "react";
import s from "./Header.module.scss";
import { AppContext } from "../../context";
import { Actions } from "./Actions/Actions";
import { Nav } from "./Nav/Nav";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";
import { Dropdown } from "./Dropdown/Dropdown";
import { usePopup } from "../../hooks/usePopup";
import { Left } from "./Left/Left";

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

    // form popup


    const formData = data.form;
    console.log(formData);
    const [isPopupActive, activatePopup, deactivatePopup] = usePopup();

    //
    const themeColor = page === "invincibility" && "brightGreen";
    const secondaryColor = page === "basicStrategies" && "pink";

    return (
        <header className={s.headerFixed}>
            <div className={s.content + (page === "invincibility" ? " " + s.content_invin : page === "basicStrategies" ? " " + s.content_basic : "")}>
                <Left page={page} color={themeColor} isBurgerActive={isBurgerActive} toggleActivateBurger={toggleActivateBurger} />
                <Nav
                    page={page}
                    color={themeColor}
                    secondaryColor={secondaryColor}
                    isBurgerActive={isBurgerActive}
                    toggleActivateBurger={toggleActivateBurger}
                    items={data.nav}
                ></Nav>
                <Actions
                    color={themeColor}
                    secondaryColor={secondaryColor}
                    buttonText={data.buttonText}
                    activatePopup={activatePopup}
                    isSearchActive={isSearchActive}
                    toggleActivateSearch={toggleActivateSearch}
                ></Actions>
                <Dropdown
                    page={page}
                    secondaryColor={secondaryColor}
                    isBurgerActive={isBurgerActive}
                    usefulList={data.menu.useful}
                    aboutList={data.menu.about}
                    contacts={data.menu.contacts}
                    isSearchActive={isSearchActive}
                    toggleActivateSearch={toggleActivateSearch}
                    searchBlockData={data.search}
                    contentLowRes={data.nav}
                />
            </div>
            <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                <ContactForm
                    title={formData.title}
                    fields={formData.fields}
                    btnText={formData.submitBtn}
                    submitDesc={formData.submitDesc}
                    onFormSubmit={deactivatePopup}
                    yaMetricsFn={yaMetricsFn}
                />
            </PopupFullScreen>
        </header>
    );
};
