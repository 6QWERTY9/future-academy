import { COURSES_DATA } from "@entities/CourseCard/model/data";
import { DetailsPageLayout } from "@shared/components/DetailsPageLayout"
import { AboutSection } from "@widgets/DetailsCoursePageComponents/AboutSection/AboutSection";
import { CourseGallery } from "@widgets/DetailsCoursePageComponents/CourseGallery/CourseGallery";
import { CoursePromoBanner } from "@widgets/DetailsCoursePageComponents/CoursePromoBanner/CoursePromoBanner";
import { BenefitsSection } from "@widgets/DetailsPageComponents/components/BenefitsSection/BenefitsSection";
import { FAQSection } from "@widgets/DetailsPageComponents/components/FAQSection/FAQSection";
import { HeroSection } from "@widgets/DetailsPageComponents/components/HeroSection/HeroSection";
import { TeamSection } from "@widgets/DetailsPageComponents/components/TeamSection/TeamSection";
import { useMemo } from "react";
import { useParams } from "react-router-dom"

export const DetailsCoursePage = () => {
    // получаем id курса для поиска данных
    const {courseId} = useParams<{courseId: string}>();

    // ищем курс по id
    const courseData  = useMemo(() => {
        return COURSES_DATA.find((item) => item.id === courseId)
    }, [courseId]);


    // если курса нет выводим это
    if (!courseData) {
        return <div>Курс не найден</div>;
    }
    console.log(courseData)
    return (
        <DetailsPageLayout
            hero={
                <HeroSection 
                    title={courseData.title}
                    description={courseData.shortDescription}
                    image="/FutureAcademyIcons/shutterstock_2033756324.jpg"

                    stats={[
                        {
                            label: 'Срок обучения',
                            value: '5 лет',
                        },
                        {
                            label: 'Режим занятий',
                            value: '2 раза в неделю по 2 академических часа',
                        },
                        {
                            value: 'от  4 350 ₽ в месяц',
                            fontSize: '28px',
                            fontWeight: '700'
                        },
                    ]}

                    ctaBtnText="Записаться на пробное занятие"
                    ctaTitle="1 занятие бесплатное"
                    ctaDescription="Прежде чем начать обучение советуем записаться на пробное заниятие"
                    ctaBtnOnClick={() => {return}}
                />
            }

            benefits={
                <BenefitsSection
                    assistanBannerText="Вы полюбите шахматы, и вам этого будет не хватать всегда!"
                    benefitsItems={courseData.benefits ?? []}
                />
            }

            team={
                <TeamSection
                    title="Наши преподаватели"
                    persons={courseData.teachers ?? []}
                />
            }

            faq={
                <FAQSection
                    items={courseData.faq ?? []}
                />
            }
        
        >
            <AboutSection
                title={courseData.title}
                aboutDescription={courseData.aboutDescription}
                items={courseData.features}
            />
            <CoursePromoBanner
                text={[
                    'Шахматы могут помочь вам планировать наперед, не торопиться с решениями и взвешивать их плюсы и минусы.',
                    'Шахматами можно наслаждаться в любом возрасте — в результате, тренировка мозга может укреплять ваше здоровье.'
                ]}
            />
            <CourseGallery
                {...courseData.gallery}
            />
        </DetailsPageLayout>
    )
}