import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import css from './index.module.scss'
import { ReviewCard } from "../ReviewCard/ReviewCard";

export const ReviewSlider: React.FC = () => {
    return (
        <div className={css.review_slider}>
            <Swiper
                modules={[Autoplay]}
                // 1. Центрируем активный слайд
                
                // 2. Устанавливаем количество видимых слайдов (можно 'auto' или число)
                slidesPerView={6} 
                // 3. Бесконечная прокрутка, чтобы не было пустоты по бокам
                loop={true}
                // 4. Расстояние между карточками
                spaceBetween={20}
                // Адаптив: на десктопе показываем больше карточек
                
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
            >
                {Array.from({length: 12}).map(ind => (
                    <SwiperSlide key={`review-slide-${ind}`}>
                        <ReviewCard
                            author="Имя Фамилия"
                            authorImgSrc="/FutureAcademyIcons/author.jpg"
                            course="WEB-разработчик"
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius."
                            rating="4"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

