import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Input } from '@shared/components/Input';
import css from './index.module.scss'
import { AuthSocials } from '../AuthSocials';
import { Button } from '@shared/components/Button';
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('Введите email'),
    password: Yup.string().min(6, 'Минимум 6 символов').required('Введите пароль')
})

export const LoginForm = () => {
    return (
        <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={(values) => console.log(values)}
        >
            <Form className={css.login_form}>
                <Input
                    name='email'
                    type='email'
                    label='Ваш email'
                    id='login_email'
                    placeholder='E-mail'
                    width='380px'
                />
                <Input
                    name='password'
                    type='password'
                    label='Ваш пароль'
                    id='login_password'
                    placeholder='Пароль'
                    width='380px'
                />

                <AuthSocials/>

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