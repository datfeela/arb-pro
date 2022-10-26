import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isRequired, maxLength, minLength, validateEmail, validateName, validatePhone } from "../../../assets/utils/formValidation";
import { parseSpacebars } from "../../../assets/utils/stringParser";
import { RenderInput, RenderTextarea } from "../Inputs/Inputs";
import { WarningWithPopup } from "../WarningWithPopup/WarningWithPopup";
import s from "./ContactForm.module.scss";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { sendFormData } from "../../../api/api";

export const ContactForm = ({ view, title, fields, btnText, submitDesc, onFormSubmit, yaMetricsFn, initialFormValues }) => {
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

    const validateEmailField = (value) => {
        value = value.trim();
        let error = isRequired(value);
        if (!error) error = validateEmail(value);
        if (!error) error = minLength(value, 7);
        if (!error) error = maxLength(value, 30);
        return error;
    };

    const validateMessageField = (value) => {
        let error = isRequired(value);
        return error;
    };

    async function submit(values, actions) {
        if (yaMetricsFn) yaMetricsFn();
        // await sendFormData({ values: values, endpoint: "/ajax/landing_strategic.php" });
        console.log(values);
        if (onFormSubmit) onFormSubmit();
        actions.setSubmitting(false);
    }

    const formValues = {
        ...initialFormValues,
        title_form: title,
        name: fields.name && fields.name.initialValue ? fields.name.initialValue : "",
        phone: fields.phone && fields.phone.initialValue ? fields.phone.initialValue : "",
        email: fields.email && fields.email.initialValue ? fields.email.initialValue : "",
        message: fields.message && fields.message.initialValue ? fields.message.initialValue : "",
    };

    if (view === "invincibility_invocation_form")
        return (
            <InvincibilityFormView
                submit={submit}
                fields={fields}
                initialFormValues={formValues}
                validateNameField={validateNameField}
                validatePhoneField={validatePhoneField}
                validateEmailField={validateEmailField}
                validateMessageField={validateMessageField}
                title={title}
                btnText={btnText}
                submitDesc={submitDesc}
            />
        );

    return (
        <ContactFormDefaultView
            submit={submit}
            fields={fields}
            initialFormValues={formValues}
            validateNameField={validateNameField}
            validatePhoneField={validatePhoneField}
            validateEmailField={validateEmailField}
            btnText={btnText}
            submitDesc={submitDesc}
            title={title}
        />
    );
};

const ContactFormDefaultView = ({
    submit,
    fields,
    initialFormValues,
    validateNameField,
    validatePhoneField,
    validateEmailField,
    validateMessageField,
    title,
    btnText,
    submitDesc,
}) => {
    return (
        <Formik initialValues={initialFormValues} onSubmit={submit}>
            {({ isSubmitting, errors, touched }) => (
                <>
                    <Form className={s.form}>
                        {title && <span className={s.title}>{title}</span>}
                        <div className={s.inputs}>
                            <div className={s.inputWrap} style={{ display: "none" }}>
                                <Field type="hidden" name="title_form" component={RenderInput} errors={errors.name} touched={touched.name} />
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
                                    bg="light"
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
                                    bg="light"
                                />
                                <div className={s.errorWrapAbsolute}>
                                    <ErrorMessage name="phone" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={s.inputWrap}>
                                <Field
                                    type="email"
                                    name="email"
                                    component={RenderInput}
                                    validate={validateEmailField}
                                    placeholder={fields.email.placeholder}
                                    errors={errors.email}
                                    touched={touched.email}
                                    bg="light"
                                />
                                <div className={s.errorWrapAbsolute}>
                                    <ErrorMessage name="email" component={WarningWithPopup} />
                                </div>
                            </div>
                            {fields.message && (
                                <div className={s.inputWrap + " " + s.textareaWrap}>
                                    <Field
                                        type="text"
                                        name="message"
                                        component={RenderTextarea}
                                        validate={validateMessageField}
                                        placeholder={fields.message.placeholder}
                                        errors={errors.message}
                                        touched={touched.message}
                                        bg="light"
                                        maxHeight="170"
                                        defaultHeight="155"
                                    />
                                    <div className={s.errorWrapAbsolute}>
                                        <ErrorMessage name="message" component={WarningWithPopup} />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={s.footer}>
                            <button className={s.button + " formButton"} type="submit" disabled={isSubmitting}>
                                {btnText}
                            </button>
                            <span className={"formSubmitDesc"}>
                                {submitDesc.text}
                                <a href={submitDesc.link.href}>{submitDesc.link.text}</a>
                            </span>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    );
};

const InvincibilityFormView = ({
    submit,
    fields,
    initialFormValues,
    validateNameField,
    validatePhoneField,
    validateEmailField,
    btnText,
    submitDesc,
}) => {
    return (
        <Formik
            initialValues={initialFormValues}
            onSubmit={(values, actions) => {
                const { agreementCheck, ...neededValues } = { ...values };
                submit(neededValues, actions);
            }}
            validate={(values) => {
                const errors = {};

                if (values.agreementCheck === false) {
                    errors.agreementCheck = "Вы должны принять условия соглашения об обработке персональных данных";
                }

                return errors;
            }}
        >
            {({ isSubmitting, errors, touched, ...rest }) => (
                <>
                    <Form className={s.form + " " + s.form_invincibility}>
                        <div className={s.inputs}>
                            <div className={s.inputWrap} style={{ display: "none" }}>
                                <Field type="hidden" name="title_form" component={RenderInput} errors={errors.name} touched={touched.name} />
                            </div>
                            <div className={s.inputWrap}>
                                <div className={s.iconWrap}>
                                    <SvgSelector type="formName" />
                                </div>
                                <Field
                                    type="text"
                                    name="name"
                                    component={RenderInput}
                                    validate={validateNameField}
                                    placeholder={fields.name.placeholder}
                                    errors={errors.name}
                                    touched={touched.name}
                                    bg="light"
                                    isIcon={true}
                                />
                                <div className={s.errorWrapAbsolute}>
                                    <ErrorMessage name="name" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={s.inputWrap}>
                                <div className={s.iconWrap}>
                                    <SvgSelector type="formPhone" />
                                </div>
                                <Field
                                    type="text"
                                    name="phone"
                                    component={RenderInput}
                                    validate={validatePhoneField}
                                    placeholder={fields.phone.placeholder}
                                    errors={errors.phone}
                                    touched={touched.phone}
                                    bg="light"
                                    isIcon={true}
                                />
                                <div className={s.errorWrapAbsolute}>
                                    <ErrorMessage name="phone" component={WarningWithPopup} />
                                </div>
                            </div>
                            <div className={s.inputWrap}>
                                <div className={s.iconWrap}>
                                    <SvgSelector type="formEmail" />
                                </div>
                                <Field
                                    type="email"
                                    name="email"
                                    component={RenderInput}
                                    validate={validateEmailField}
                                    placeholder={fields.email.placeholder}
                                    errors={errors.email}
                                    touched={touched.email}
                                    bg="light"
                                    isIcon={true}
                                />
                                <div className={s.errorWrapAbsolute}>
                                    <ErrorMessage name="email" component={WarningWithPopup} />
                                </div>
                            </div>
                        </div>
                        <div className={s.footer}>
                            <div className={s.formSubmit}>
                                <div className={s.formSubmit__checkbox}>
                                    <div
                                        className={s.checkbox + (rest.values.agreementCheck ? " " + s.checkbox_checked : "")}
                                        onClick={() => {
                                            rest.setFieldValue("agreementCheck", !rest.values.agreementCheck);
                                        }}
                                    >
                                        <SvgSelector type="tickBold" />
                                    </div>
                                    <div className={"formSubmitDesc"}>
                                        {submitDesc.text}
                                        <a href={submitDesc.link.href}>{submitDesc.link.text}</a>
                                    </div>
                                </div>
                                <Field className={s.checkbox_default} type="checkbox" name="agreementCheck" />
                                <ErrorMessage name="agreementCheck" render={(msg) => <div className={s.agreementError}>{msg}</div>} />
                            </div>
                            <button className={s.button + " formButton"} type="submit" disabled={isSubmitting}>
                                {btnText}
                            </button>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    );
};
