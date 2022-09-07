import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isRequired, maxLength, minLength, validateEmail, validateName, validatePhone } from "../../../assets/utils/formValidation";
import { parseSpacebars } from "../../../assets/utils/stringParser";
import { RenderInput, RenderTextarea } from "../Inputs/Inputs";
import { WarningWithPopup } from "../WarningWithPopup/WarningWithPopup";
import s from "./ContactForm.module.scss";

// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contactTitle: '',
//             contactName: '',
//             contactTelephone: '',
//             contactEmail: '',
//             contactMessage: 'Добрый день! Я хочу понять, куда двигаться дальше, прописать стратегию и подробный план действий на несколько лет вперед',
//         };

//         this._handleSubmit = this._handleSubmit.bind(this);
//         this._handleChange = this._handleChange.bind(this);
//         this._handleChangeMsg = this._handleChangeMsg.bind(this);
//         this._handleChangeTitle = this._handleChangeTitle.bind(this);
//         this._handleChangeName = this._handleChangeName.bind(this);
//         this._handleChangeTelephone = this._handleChangeTelephone.bind(this);
//     }

//     _handleChange(event) {
//         this.setState({
//             contactEmail: event.target.value,
//         });
//     }

//     _handleChangeMsg(event) {
//         this.setState({
//             contactMessage: event.target.value
//         });
//     }

//     _handleChangeTitle(event) {
//         this.setState({
//             contactTitle: event.target.value
//         });
//     }
    
//     _handleChangeName(event) {
//         this.setState({
//             contactName: event.target.value
//         });
//     }

//     _handleChangeTelephone(event) {
//         this.setState({
//             contactTelephone: event.target.value
//         });
//     }
// }

export const ContactForm = ({ title, fields, btnText, submitDesc, submitForm, initialFormValues }) => {
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

    //TODO MVC

    async function submit(values, actions) {
        // const submit = (values, actions) => {
        // submitForm(values);
        actions.setSubmitting(false);

        let dataForm = new FormData();

        for (let [name, value] of Object.entries(values)) {
            dataForm.append(name, value);
        }

        await fetch("/ajax/landing_strategic.php", {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: dataForm
        })
        .then(response => response.json())
        .then(data => submitForm(data))
        .then(data => {
            if (data === "Y") {
                alert("Заявка отправлена");
            }
        });
        
    };
    
    //---//

    return (
        <Formik initialValues={initialFormValues} onSubmit={submit}>
            {({ isSubmitting, errors, touched }) => (
                <>
                    <Form className={s.form}>
                        {title && <span className={s.title}>{title}</span>}
                        <div className={s.inputs}>
                            <div className={s.inputWrap} style={{display:"none"}}>
                                <Field
                                    type="hidden"
                                    name="title_form"
                                    component={RenderInput}
                                    errors={errors.name}
                                    touched={touched.name}
                                />
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

// export default Contact;