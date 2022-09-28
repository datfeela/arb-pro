import { useEffect, useRef } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { setBlockHeight } from "../../../../assets/utils/setBlockHeight";
import { SvgSelector } from "../../../_generic/SvgSelector/SvgSelector";
import s from "./Search.module.scss";

export const Search = ({ buttonText, inputPlaceholder, isSearchActive, toggleActivateSearch, color }) => {
    const searchRef = useRef();

    useEffect(() => {
        if (isSearchActive) {
            setBlockHeight(true, searchRef);
        } else setBlockHeight(false, searchRef);
    }, [isSearchActive]);

    const submit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    };

    return (
        <div ref={searchRef} className={s.wrap + (color === "brightGreen" ? " " + s.wrap_bright : "")}>
            <div className={s.content}>
                <Formik initialValues={{ search: "" }} onSubmit={submit}>
                    {({ isSubmitting }) => (
                        <Form className={s.form}>
                            <div className={s.inputWrap}>
                                <Field type="text" name="search" placeholder={inputPlaceholder} component={RenderInput} />
                            </div>
                            <button className={s.button + " formButton"} type="submit" disabled={isSubmitting}>
                                <div className={s.button_icon}>
                                    <SvgSelector type="search" />
                                </div>
                                <span className={s.button_text}>{buttonText}</span>
                            </button>
                        </Form>
                    )}
                </Formik>
                <div onClick={toggleActivateSearch} className={s.closeButton}>
                    <SvgSelector type={"close"} />
                </div>
            </div>
        </div>
    );
};

const RenderInput = ({ form, field, ...props }) => {
    let classname = s.input;
    if (field.value) classname = classname + " " + s.input_touched;

    return <input name={field.name} value={field.value} onChange={form.handleChange} placeholder={props.placeholder} className={classname} />;
};
