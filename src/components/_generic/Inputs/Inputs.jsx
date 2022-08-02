import React, { useEffect } from "react";
import s from "./Inputs.module.scss";

export const RenderInput = ({ form, field, ...props }) => {
    let classname = s.input;
    if (props.bg === "light") classname = classname + " " + s.input_light;
    if (props.errors && props.touched) classname = classname + " " + s.input_error;
    else if (field.value) classname = classname + " " + s.input_touched;

    return (
        <input
            name={field.name}
            value={field.value}
            onChange={form.handleChange}
            checked={field.checked}
            placeholder={props.placeholder}
            className={classname}
        />
    );
};

export const RenderTextarea = ({ form, field, ...props }) => {
    let classname = s.input + " " + s.textarea;
    if (props.bg === "light") classname = classname + " " + s.input_light;
    if (props.errors && props.touched) classname = classname + " " + s.input_error;
    else if (field.value) classname = classname + " " + s.input_touched;

    const textareaRef = React.createRef();

    const changeHeight = (e) => {
        textareaRef.current.style.height = `${props.defaultHeight}px`;
        let contentHeight = `${e.target.scrollHeight}px`;
        textareaRef.current.style.height = contentHeight;
        props.onHeightChange && props.onHeightChange();
    };

    //проверяю значение на пустое для ресета высоты при сабмите
    useEffect(() => {
        if (!form.values[field.name]) resetHeight();
    }, [form.values]);

    const resetHeight = () => {
        textareaRef.current.style.height = `${props.defaultHeight}px`;
    };

    const defaultHeight = `${+props.defaultHeight}px`;

    return (
        <textarea
            ref={textareaRef}
            style={{ height: defaultHeight, maxHeight: `${props.maxHeight}px`, minHeight: defaultHeight }}
            type={props.type}
            name={field.name}
            onChange={(e) => {
                form.handleChange(e);
                changeHeight(e);
            }}
            value={field.value}
            className={classname}
            placeholder={props.placeholder}
            checked={field.checked}
        />
    );
};
