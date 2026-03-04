import CourseCardIcon from '@assets/Group 815.svg?react';

import { getRandomColors } from "../config/getRandomColor"
import type { CourseCardProps } from "../model/types";

import css from './index.module.scss';

export const CourseCard: React.FC<CourseCardProps> = ({
  id='1',
  title='«Разработка мобильных приложений»',
  shortDescription='Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
  fullDescription='полное описания',
  discount='-10%',
  studyDuration='24 месяца',
  price='цена',
  onClick,
}) => {
  const randomBackgroundColor = getRandomColors();
  const modalProps = {fullDescription, discount, studyDuration, price, title}
  const style = {
    background: randomBackgroundColor
  }
  return (
    <div
    style={style}
    id={id}
    onClick={onClick ?? undefined}
    role="button"
    tabIndex={0}
    className={css.course_card_wrapper}
    >
      <div className={css.course_card_content}>
        <span className={css.course_card_pretitle}>
          Программа
        </span>
        <div className={css.course_card_title_wrapper}>
          <CourseCardIcon width={26} height={42} className={css.course_card_icon}/>
          <h4 className={css.course_card_title}>
            {title}
          </h4>
        </div>
        <div className={css.course_card_description_wrapper}>
          <p className={css.course_card_description}>
            {shortDescription}
          </p>
        </div>
        <div className={css.course_card_study_duration_wrapper}>
          <span className={css.course_card_study_duration}>{studyDuration}</span>
          {discount && (
            <div className={css.course_card_discount_wrapper}>
              <span className={css.course_card_discount}>{discount}</span>
            </div>
            
          )}
        </div>
      </div>
    </div>
  )
}
