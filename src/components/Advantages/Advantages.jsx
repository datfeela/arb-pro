import { useContext } from "react";
import s from "./Advantages.module.scss";
import { AppContext } from "../../context";
import { Advantage } from "./Advantage/Advantage";

export const Advantages = () => {
    const data = useContext(AppContext).state.layouts.strategy.advantages;
    const blocks = data.list.map((block) => {
        return <Advantage key={block.id} data={block} />;
    });

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
                        {/* <button onClick={activatePopup} className={s.button}>
                            <div className={s.iconWrap}>
                                <SvgSelector type="arrowCircle" />
                            </div>
                            <span className={s.text}>{data.button}</span>
                        </button> */}
                    </div>
                </div>
                {/* <PopupFullScreen isPopupActive={isPopupActive} deactivatePopup={deactivatePopup}>
                    <ContactForm
                        title={data.form.title}
                        fields={data.form.fields}
                        btnText={data.form.submitBtn}
                        submitDesc={data.form.submitDesc}
                        submitForm={submitForm}
                        initialFormValues={initialFormValues}
                    />
                </PopupFullScreen> */}
            </div>
        </div>
    );
};
