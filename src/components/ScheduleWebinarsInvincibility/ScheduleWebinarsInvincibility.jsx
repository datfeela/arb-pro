import { useContext, useState } from "react";
import s from "./ScheduleWebinarsInvincibility.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Particles } from "./Particles/Particles";
import { Card } from "./Card/Card";
import { usePopup } from "../../hooks/usePopup";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";

export const ScheduleWebinarsInvincibility = () => {
    const data = useContext(AppContext).state.layouts.invincibility.scheduleWebinars;
    const { title1, title2, content, cards, popupForm } = { ...data };
    const [wantedWebinar, setWantedWebinar] = useState(null);

    // popup form

    const initialFormValues = { wantedWebinar: wantedWebinar };
    const [isPopupActive, activatePopup, deactivatePopup] = usePopup();

    const cardsItems = cards.map((card, index) => <Card key={index} activatePopup={activatePopup} setWantedWebinar={setWantedWebinar} {...card} />);

    return (
        <div id="webinarsInvincibility" className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.header}>
                    <div className={s.titleWrap}>
                        <ArticleTitle title={title1} size="medium" />
                    </div>
                    <ArticleTitle title={title2} size="medium" />
                </div>
                <div className={s.content}>
                    <div className={s.text}>
                        <span className={s.title}>{content.title}</span>
                        <span className={s.desc}>{content.desc}</span>
                    </div>
                    <div className={s.animation}>
                        <Particles />
                    </div>
                </div>
                <div className={s.cards}>{cardsItems}</div>
                <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                    <ContactForm
                        title={popupForm.title}
                        fields={popupForm.fields}
                        btnText={popupForm.submitBtn}
                        submitDesc={popupForm.submitDesc}
                        onFormSubmit={deactivatePopup}
                        initialFormValues={initialFormValues}
                    />
                </PopupFullScreen>
            </div>
        </div>
    );
};
