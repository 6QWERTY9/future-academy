import { CourseCard } from "@entities/CourseCard/ui/CourseCard"
import { LayoutPage } from "@shared/components/LayoutPage"

export const CoursesPage = () => {
    return (
        <LayoutPage headerTheme="dark">
            <CourseCard/>
        </LayoutPage>
    )
}