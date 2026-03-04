import Star from '@assets/Star 1.svg?react'
import css from './index.module.scss'
import type { ReviewCardProps } from './model/types'
import { getAssetPath } from '@shared/lib/getPath'



export const ReviewCard: React.FC<ReviewCardProps> = ({ 
    author, course,
    review,
    rating,
}) => {

    return (
        <div className={css.review_card}>
            <div className={css.review_card_content}>
                <div className={css.author_info_wrapper}>
                    <img src={getAssetPath('/FutureAcademyIcons/author.jpg')} alt={`Фотография автора отзыва`} width={40} height={40} className={css.author_img}/>
                    <div className={css.author_info}>
                        <span className={css.author_name} aria-label={`Имя автора: ${author}`}>{author}</span>
                        <span className={css.author_course} aria-label={`Названия курса который закончил автор: ${course}`}>Студент курса «{course}»</span> 
                    </div>
                    
                </div>

                <div className={css.review_wrapper}>
                    <p className={css.review} aria-label={`Отзыв автора: ${review}`}>
                        {review}
                    </p>
                </div>

                <div className={css.rating_wrapper}>
                    <Star width={20} height={20}/>
                    <span className={css.rating} aria-label={`Оценка курса: ${rating}`}>
                        {rating} / 5
                    </span>
                </div>
            </div>
        </div>
    )
}