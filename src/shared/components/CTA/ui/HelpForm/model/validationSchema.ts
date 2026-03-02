import * as Yup from 'yup';

const phoneRegExp = /^\+?[0-9]{10,15}$/

export const validationSchema = Yup.object().shape({
    userName: Yup.string()
    .min(2, 'Имя слишком короткое')
    .max(50, 'Имя слишком длинное')
    .required('Введите ваше имя'),

    userPhone: Yup.string()
    .matches(phoneRegExp, 'Введите корректный номер телефона')
    .required('Телефон обязателен'),

    userEmail: Yup.string()
    .email('Некорректный формат email')
    .required('Введите email')
})