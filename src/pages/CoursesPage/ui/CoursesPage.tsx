
import { CourseFilter } from "@features/CourseFilter/ui/CourseFilter"
import { LayoutPage } from "@shared/components/LayoutPage"

export const CoursesPage = () => {
    return (
        <LayoutPage headerTheme="dark">
            
            <CourseFilter/>
        </LayoutPage>
    )
}