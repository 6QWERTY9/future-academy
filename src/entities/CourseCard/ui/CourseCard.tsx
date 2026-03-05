import CourseCardIcon from '@assets/Group 815.svg?react';

import type { CourseCardProps } from "../model/types";

import css from './index.module.scss';
import { CourseCardModal } from './components/CourseCardModal';

export const CourseCard: React.FC<CourseCardProps> = ({
  id='mobile-dev',
  title='«Разработка мобильных приложений»',
  shortDescription='Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. ',
  fullDescription='«Научитесь создавать современные приложения для iOS и Android с нуля. Вы пройдете путь от первой строчки кода до запуска своего проекта в App Store и Google Play. Мы разберем основы дизайна интерфейсов, логику работы приложений и научимся делать их быстрыми и удобными. Курс полностью ориентирован на практику и подойдет новичкам без опыта в программировании.»',
  discount='-10%',
  studyDuration='24 месяца',
  price='50 000 р',
  category='kids',
  onClick,
  onClose,
  isModalOpen,
  background='#FFDDC1',
}) => {
  const modalProps = {fullDescription, discount, studyDuration, price, title, category, id}
  const style = {
    background: background
  }

  
  return (
    <>
    <div
    style={style}
    id={id}
    onClick={onClick && undefined}
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
    <CourseCardModal isOpen={isModalOpen} onClose={onClose && undefined} {...modalProps}/>
    </>
  )
}
