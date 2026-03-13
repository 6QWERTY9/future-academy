import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/free-mode';

import type { CourseGalleryProps } from "../model/types";
import css from './index.module.scss'
import clsx from "clsx";

export const CourseGallery = ({title, desc, images}: CourseGalleryProps) => {
    return (
        <section className={css.gallery_section}>
            <div className={clsx(css.gallery_section_content, 'content_center')}>
                <div className={css.header}>
                    <h2 className={css.title}>
                        {title}
                    </h2>
                    <p className={css.description}>
                        {desc}
                    </p>
                </div>
            </div>

            <div className={css.swiper_wrapper}>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    freeMode={true}
                    mousewheel={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[FreeMode, Mousewheel, Autoplay]}
                    
                    className={css.swiper}
                >
                    {images.map((url, index) => (
                        <SwiperSlide key={index} className={css.slide}>
                            <div className={css.gallery_image_wrapper}>
                                <img src={url} alt={`Gallery ${index}`}  className={css.image}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            
        </section>
    )
}