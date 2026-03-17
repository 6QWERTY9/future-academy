import { AUTH_TYPES } from "@app/router/routesPath";
import { LoginForm } from "@features/AuthForm/Login/LoginForm";
import { RegistrationForm } from "@features/AuthForm/Registration/RegistrationForm";
import { LayoutPage } from "@shared/components/LayoutPage"
import { Tab } from "@shared/components/Tab";


import { useNavigate, useParams } from "react-router-dom"
import css from './index.module.scss'
import clsx from "clsx";
import { AssistantBanner } from "@shared/components/AssistantBanner";

export const AuthPage = () => {
    
    const {types} = useParams<{types: string}>();
    const navigate = useNavigate();



    console.log(types)
    return (
        <LayoutPage
        headerTheme="dark"
        >
            <section className={css.auth_section}>
                <div className={clsx(css.auth_section_content, 'content_center')}>
                    <div className={css.tabs_wrapper}>
                        <Tab id="login" text="Вход" isActive={types === AUTH_TYPES.LOGIN} onClick={() => navigate(`/auth/${AUTH_TYPES.LOGIN}`)}/>
                        <Tab id="registration" text="Регистрация" isActive={types === AUTH_TYPES.REGISTRATION} onClick={() => navigate(`/auth/${AUTH_TYPES.REGISTRATION}`)}/>
                    </div>
                    <div className={css.assistant_wrapper}>
                            <AssistantBanner owlSize="small" text={{paragraph: 'Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта'}}/>
                    </div>
                    <div className={css.form_wrapper}>
                        {types === AUTH_TYPES.LOGIN ? <LoginForm/> : <RegistrationForm/>}
                    </div>
                </div>
            </section>
        </LayoutPage>
    )
}