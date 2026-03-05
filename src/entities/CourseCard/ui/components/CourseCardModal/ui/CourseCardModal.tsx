import { useEffect, useRef } from "react"
import type { ModalProps } from "../model/types"

import css from './index.module.scss';
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "@app/router/routesPath";
import { getMonthWord } from "@shared/lib/getMonthWord";

export const CourseCardModal: React.FC<ModalProps> = ({
    isOpen, 
    onClose, 
    id, 
    title, 
    fullDescription, 
    studyDuration, 
    discount, 
    price, 
    category,
    ...props
  }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close()
    }
  }, [isOpen])
  return (
    <dialog
    ref={dialogRef}
    onClose={onClose}
    {...props}

    className={css.course_card_modal}
    id={id}
    >
      <div className={css.course_card_modal_content}>
        <div className={css.course_card_modal_title_wrapper}>
          <h3 className={css.course_card_modal_title}>
            {title}
          </h3>

          <button className={css.course_card_modal_close_btn} onClick={onClose}>
            
          </button>
        </div>

        <div className={css.course_card_modal_about_course_wrapper}>
          <p className={css.course_card_modal_about_course}>
            {fullDescription}
          </p>
        </div>

        <div className={css.course_card_modal_about_price_wrapper}>
          <div className={css.course_card_modal_about_price_content}>
            <span className={css.course_card_modal_about_price_study_duration}>{studyDuration} {getMonthWord(studyDuration)}</span>
            <span className={css.course_card_modal_about_price}>{price}</span>

            {discount && (<span className={css.course_card_modal_about_price_discount}>{discount}</span>)}
          </div>
          <Link to={`/${ROUTE_PATH.COURSES}/${category}/${id}`} className={css.course_card_modal_about_price_more_details} onClick={onClose}>
            Подробнее
          </Link>
        </div>
      </div>
    </dialog>
  )
}
