import s from "./ActualForm.module.scss";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { WarningWithPopup } from "../../../_generic/WarningWithPopup/WarningWithPopup";
import { isRequired, maxLength, minLength, validateName } from "../../../../assets/utils/formValidation";
import { parseSpacebars } from "../../../../assets/utils/stringParser";

export const ActualForm = ({ fields, btnText, submitDesc }) => {
    const handleNameBlur = (props) => {
        debugger;
    };

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
            {({ isSubmitting, errors }) => (
                <Form className={s.form}>
                    <div className={s.inputWrap}>
                        <Field
                            type="text"
                            name="name"
                            component={RenderField}
                            validate={validateNameField}
                            placeholder={fields.name.placeholder}
                            errors={errors.name}
                        />
                        <div className={s.errorWrapAbsolute}>
                            <ErrorMessage name="name" component={WarningWithPopup} />
                        </div>
                    </div>
                    <div className={s.inputWrap}>
                        <Field
                            type="text"
                            name="phone"
                            component={RenderField}
                            validate={validatePhoneField}
                            placeholder={fields.phone.placeholder}
                            errors={errors.phone}
                        />
                        <div className={s.errorWrapAbsolute}>
                            <ErrorMessage name="phone" component={WarningWithPopup} />
                        </div>
                    </div>
                    <button className={s.button} type="submit" disabled={isSubmitting}>
                        {btnText}
                    </button>
                    <span className={s.submitDesc}>
                        {submitDesc.text}
                        <a href={submitDesc.link.href}>{submitDesc.link.text}</a>
                    </span>
                </Form>
            )}
        </Formik>
    );
};

const RenderField = ({ form, field, ...props }) => {
    return (
        <input
            name={field.name}
            value={field.value}
            onChange={form.handleChange}
            checked={field.checked}
            placeholder={props.placeholder}
            className={props.errors ? s.input + " " + s.input_error : s.input}
        />
    );
};

// const handleInput = (value) => {
//     if (/^[0-9.,()%*+-/√]+$/i.test(value) || value === "");
// };
