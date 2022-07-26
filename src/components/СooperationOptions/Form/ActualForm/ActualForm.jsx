import s from "./ActualForm.module.scss";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { WarningWithPopup } from "../../../_generic/WarningWithPopup/WarningWithPopup";
import { isRequired, maxLength, minLength, validateName, validatePhone } from "../../../../assets/utils/formValidation";
import { parseSpacebars } from "../../../../assets/utils/stringParser";
import { RenderInput } from "../../../_generic/Inputs/Inputs";
import { sendFormData } from "../../../../api/api";

export const ActualForm = ({ fields, btnText, submitDesc, yaMetricsFn }) => {
    const data = useContext(AppContext).state.layouts.strategy.cooperation;

    //validation
    const validateNameField = (value) => {
        value = value.trim();
        let error = isRequired(value);
        if (!error) error = validateName(value);
        if (!error) error = minLength(value, 3);
        if (!error) error = maxLength(value, 16);
        return error;
    };

    const validatePhoneField = (value) => {
        value = parseSpacebars(value);
        let error = isRequired(value);
        if (!error) error = validatePhone(value);
        if (!error) error = minLength(value, 7);
        if (!error) error = maxLength(value, 15);
        return error;
    };

    async function submit(values, actions) {
        if (yaMetricsFn) yaMetricsFn();
        await sendFormData({ values: values, endpoint: "/ajax/landing_strategic.php" });
        actions.setSubmitting(false);
    }

    return (
        <Formik initialValues={{ title_form: data.form.title, name: "", phone: "", email: "", message: "" }} onSubmit={submit}>
            {({ isSubmitting, errors, touched }) => (
                <Form className={s.form}>
                    <div className={s.inputWrap} style={{ display: "none" }}>
                        <Field type="hidden" name="title_form" component={RenderInput} errors={errors.name} touched={touched.name} />
                        <div className={s.errorWrapAbsolute}>
                            <ErrorMessage name="title_form" component={WarningWithPopup} />
                        </div>
                    </div>
                    <div className={s.inputWrap}>
                        <Field
                            type="text"
                            name="name"
                            component={RenderInput}
                            validate={validateNameField}
                            placeholder={fields.name.placeholder}
                            errors={errors.name}
                            touched={touched.name}
                        />
                        <div className={s.errorWrapAbsolute}>
                            <ErrorMessage name="name" component={WarningWithPopup} />
                        </div>
                    </div>
                    <div className={s.inputWrap}>
                        <Field
                            type="text"
                            name="phone"
                            component={RenderInput}
                            validate={validatePhoneField}
                            placeholder={fields.phone.placeholder}
                            errors={errors.phone}
                            touched={touched.phone}
                        />
                        <div className={s.errorWrapAbsolute}>
                            <ErrorMessage name="phone" component={WarningWithPopup} />
                        </div>
                    </div>
                    <button className={s.button + " formButton"} type="submit" disabled={isSubmitting}>
                        {btnText}
                    </button>
                    <span className={"formSubmitDesc"}>
                        {submitDesc.text}
                        <a href={submitDesc.link.href}>{submitDesc.link.text}</a>
                    </span>
                </Form>
            )}
        </Formik>
    );
};
