import CourseCardIcon from '@assets/Group 815.svg?react';

import type { CourseCardProps } from "../model/types";

import css from './index.module.scss';

import { getMonthWord } from '@shared/lib/getMonthWord';

export const CourseCard: React.FC<CourseCardProps> = ({
    id,
    title,
    shortDescription,
    fullDescription,
    studyDuration,
    price,
    category,
    discount,
    background,
    onOpen, // Твой новый проп для открытия модалки
    level, // Добавь эти поля
    type,  // Добавь эти поля
}) => {
  const style = {
    background: background
  }

  return (
    <>
    <div
    style={style}
    id={id}
    onClick={onOpen}
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
          <span className={css.course_card_study_duration}>{studyDuration} {getMonthWord(studyDuration)}</span>
          {discount && (
            <div className={css.course_card_discount_wrapper}>
              <span className={css.course_card_discount}>{discount}</span>
            </div>
            
          )}
        </div>
      </div>
    </div>

    </>
  )
}
