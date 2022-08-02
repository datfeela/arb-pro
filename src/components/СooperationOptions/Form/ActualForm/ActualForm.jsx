import s from "./ActualForm.module.scss";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { WarningWithPopup } from "../../../_generic/WarningWithPopup/WarningWithPopup";
import { isRequired, maxLength, minLength, validateName, validatePhone } from "../../../../assets/utils/formValidation";
import { parseSpacebars } from "../../../../assets/utils/stringParser";
import { RenderInput } from "../../../_generic/Inputs/Inputs";

export const ActualForm = ({ fields, btnText, submitDesc }) => {
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

    const submit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    };

    return (
        <Formik initialValues={{ name: "", phone: "" }} onSubmit={submit}>
            {({ isSubmitting, errors, touched }) => (
                <Form className={s.form}>
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
