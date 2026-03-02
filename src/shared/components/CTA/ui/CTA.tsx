import { AssistantBanner } from "@shared/components/AssistantBanner";
import { HelpForm } from "./HelpForm";
import css from './index.module.scss';
export default function CTA() {
  return (
    <div className={css.cta_banner_content}>
      <div className={css.cta_assistant_banner_wrapper}>
        <AssistantBanner
          owlSize="large"
          text={{
            title: 'Помочь с выбором?',
            paragraph: `Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы 
            и подберут подходящий вариант обучения.`
          }}
        />
      </div>
      <HelpForm/>
    </div>
  )
}
