import { useContext, useState } from "react";
import s from "./Advantages.module.scss";
import { AppContext } from "../../context";
import { Advantage } from "./Advantage/Advantage";
import { SvgSelector } from "../_generic/SvgSelector/SvgSelector";
import { PopupFullScreen } from "../_generic/PopupFullScreen/PopupFullScreen";
import { ContactForm } from "../_generic/ContactForm/ContactForm";

export const Advantages = () => {
    const data = useContext(AppContext).state.advantages;
    const blocks = data.list.map((block) => {
        return <Advantage key={block.id} data={block} />;
    });

    const [isPopupActive, setIsPopupActive] = useState(false);

    const activatePopup = () => {
        setIsPopupActive(true);
    };

    const deactivatePopup = () => {
        setIsPopupActive(false);
    };

    const initialFormValues = { name: "", phone: "", email: "" };

    const submitForm = (values) => {
        console.log(values);
    };

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.blocksWrap}>
                    <div className={s.blocksWrapInner}>
                        {blocks[0]}
                        {blocks[1]}
                    </div>
                    <div className={s.blocksWrapInner}>
                        {blocks[2]}
                        <button onClick={activatePopup} className={s.button}>
                            <div className={s.iconWrap}>
                                <SvgSelector type="arrowCircle" />
                            </div>
                            <span className={s.text}>{data.button}</span>
                        </button>
                    </div>
                </div>
                <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                    <ContactForm
                        title={data.form.title}
                        fields={data.form.fields}
                        btnText={data.form.submitBtn}
                        submitDesc={data.form.submitDesc}
                        submitForm={submitForm}
                        initialFormValues={initialFormValues}
                    />
                </PopupFullScreen>
            </div>
        </div>
    );
};
