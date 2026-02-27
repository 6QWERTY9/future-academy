import { SectionWithBgLayout } from "@shared/components/SectionWithBgLayout"

import { ReviewSlider } from "./components/ReviewSlider/ReviewSlider"


export const ReviewSection = () => {
    return (
        <SectionWithBgLayout className="review-slider-section" title="Отзывы наших студентов">
            <ReviewSlider/>
        </SectionWithBgLayout>
    )
}