
import { CourseFilter } from "@features/CourseFilter/ui/CourseFilter"
import { LayoutPage } from "@shared/components/LayoutPage"
import { CourseCardsList } from "@widgets/CourseCardsList"

export const CoursesPage = () => {
    return (
        <LayoutPage headerTheme="dark">
            
            <CourseFilter/>
            <CourseCardsList/>
        </LayoutPage>
    )
}