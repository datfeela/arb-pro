export const isRequired = (value) => {
    let error = 'Обязательное поле';
    return value ? undefined : error
}

export const maxLength = (value, max) => {
    let error = null;
    value && value.length > max && (error = `Максимальная длина строки - ${max} символов`)
    return error
}

export const minLength = (value, min) => {
    let error = null;
    value && value.length < min && (error = `Минимальная длина строки - ${min} символов`)
    return error;
}

export const validateName = (value) => {
    let error;
    if (!/^[а-яa-z-\s]+$/iu.test(value)) {
        error = 'Имя может состоять из кириллицы, латиницы, знака "-"';
    }
    return error;
};

export const validatePhone = (value) => {
    let error;
    if (!/^[0-9+-]+$/i.test(value)) {
        error = 'Номер телефона может состоять из цифр, знаков "+" и "-"';
    }
    return error;
};

export const validateUrl = (value) => {
    let error;
    if (value.length === 0) { return error }
    if (!/^[A-Z0-9._%+-]+\.[A-Z0-9/._-]{2,1000}$/i.test(value)) {
        error = "Некорректный URL адрес";
    }
    return error;
}