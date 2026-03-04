import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import css from './index.module.scss'
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import type { ReviewCardProps } from "../ReviewCard/model/types";
import { getReviews } from "./api/ReviewApi";

export const ReviewSlider: React.FC = () => {
    const [reviewsData, setReviewsData] = useState<ReviewCardProps[]>([]);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getReviews();

                setReviewsData(data.items)
            } catch (e) {
                console.log(e);
            }
        };

        load();
    }, [])
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
                {reviewsData.map(data => (
                    <SwiperSlide>
                        <ReviewCard 
                        key={data.id}
                        author={data.author}
                        
                        course={data.course}
                        review={data.review}
                        rating={data.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

