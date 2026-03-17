import * as Yup from 'yup';
import {Formik, Form} from 'formik';

import css from './index.module.scss'
import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
const RegistrationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Слишком короткое имя')
        .required('Введите ваше имя'),
    
    email: Yup.string()
        .email('Некорректный email')
        .required('Email обязателен'),
    
    password: Yup.string()
        .min(6, 'Пароль должен быть не менее 6 символов')
        .required('Введите пароль'),
    
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .required('Подтвердите пароль')
})
export const RegistrationForm = () => {
    return (
        <Formik
        initialValues={{username: '', email: '', password: '', confirmPassword: ''}}
        validationSchema={RegistrationSchema}
        onSubmit={(values) => console.log('Регистрация:', values)}
        >
            <Form className={css.registration_form}>
                <Input
                    name='username'
                    type='text'
                    label='имя'
                    id='registration_username'
                    placeholder='Как вас зовут?'
                    width='380px'
                />

                <Input
                    name='email'
                    type='email'
                    label='Email'
                    id='registration_email'
                    placeholder='Ваш Email'
                    width='380px'
                />

                <Input
                    name='password'
                    type='password'
                    label='Пароль'
                    id='registration_password'
                    placeholder='Придумайте пароль'
                    width='380px'
                />

                <Input
                    name='confirmPassword'
                    type='password'
                    label='Повтор пароля'
                    id='registration_confirm_password'
                    placeholder='Повторите пароль'
                    width='380px'
                />

                <Button
                    text='Вход'
                    type='submit'
                    buttonType='default'
                    width='180px'
                    height='50px'
                />
            </Form>

        </Formik>
    )
}