import { Input } from "@shared/components/Input";
import { Form, Formik,  } from "formik";
import { validationSchema } from "../model/validationSchema";
import { Button } from "@shared/components/Button";

import css from './index.module.scss';

export default function HelpForm() {
  return (
    <Formik
      initialValues={{userName: '', userPhone: '', userEmail: ''}}
      validationSchema={validationSchema}
      onSubmit={(values) => {console.log(values)}}
    >
      <Form className={css.cta_help_form_wrapper}>
        <div className={css.help_form_input_user_name}>
          <Input type="text" name="userName" label="Ваше имя" placeholder="Ваше имя" id="user_name" width="440px" />
        </div>
        <div className={css.help_form_input_user_phone}>
          <Input type="tel" name="userPhone" label="Ваш телефон" placeholder="Ваш телефон" id="user_tel" width="210px"/>
        </div>
        <div className={css.help_form_input_user_email}>
          <Input type="email" name="userEmail" label="Ваш e-mail" placeholder="Ваш e-mail" id="user_email" width="210px"/>
        </div>

        <span className={css.cta_help_form_agreement}>
          Нажимая на кнопку, я соглашаюсь 
          на обработку персональных данных 
          и с правилами пользования Платформой
        </span>
        <div className={css.help_form_button}>
          <Button
            text="Отправить"
            width="200px"
            height="50px"
            buttonType="default"
            
          />
        </div>
      
      </Form>
    </Formik>
  )
}
