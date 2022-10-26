import { useContext } from "react";
import { AppContext } from "../../context";
import s from "./InvocationForm.module.scss";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { ContactForm } from "../_generic/ContactForm/ContactForm";
import particles from "../../assets/animations/particles.json";
import Lottie from "lottie-react";

export const InvocationForm = () => {
    const data = useContext(AppContext).state.layouts.invincibility.invocationForm;
    const { title1, title2, form } = { ...data };

    const initialFormValues = { name: "", phone: "", email: "", agreementCheck: false };

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.header}>
                    <div className={s.titleWrap}>
                        <ArticleTitle size="medium" title={title1} />
                    </div>
                    <ArticleTitle size="medium" title={title2} />
                </div>
                <div className={s.content}>
                    <div className={s.images}>
                        <img src="invincibility/invocationForm/1.jpg" alt="" className={s.image + " " + s.image_1} />
                        <img src="invincibility/invocationForm/2.jpg" alt="" className={s.image + " " + s.image_2} />
                        <img src="invincibility/invocationForm/3.jpg" alt="" className={s.image + " " + s.image_3} />
                    </div>
                    <ContactForm
                        title={form.title}
                        fields={form.fields}
                        btnText={form.submitBtn}
                        submitDesc={form.submitDesc}
                        initialFormValues={initialFormValues}
                        view="invincibility_invocation_form"
                    />
                </div>
            </div>
            <div className={s.animationWrap}>
                <Lottie animationData={particles} />
            </div>
        </div>
    );
};
