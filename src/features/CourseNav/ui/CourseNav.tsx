

import css from './index.module.scss';

import { Button } from "@shared/components/Button";
import { FilterButton } from "./components/FilterButtonProps/FilterButtonProps";
import { categoryTagsData, filterButtonData } from "../model/data";
import { useSearchParams } from "react-router-dom";


export default function CourseNav() {
    const [searchParams, setSearchParams] = useSearchParams();


    // 1. Всегда есть активная категория (дефолт — kids)
    const currentCategory = searchParams.get('category') || 'kids';
    // 2. Текущий выбранный тег
    const currentTag = searchParams.get('tag') || 'all';

     // Обработчик смены категории
    const handleCategoryChange = (id: string) => {
        searchParams.set('category', id);
        searchParams.delete('tag'); // Сбрасываем тег при смене категории!
        setSearchParams(searchParams);
    };
    // Обработчик клика по тегу
    const handleTagChange = (tagId: string) => {
        if (currentTag === tagId) {
        searchParams.delete('tag'); // Если нажали на уже активный тег — снимаем фильтр
        } else {
        searchParams.set('tag', tagId);
        }
        setSearchParams(searchParams);
    };

    // Находим данные для текущей категории, чтобы отрисовать нужные теги
    const activeCategoryData = categoryTagsData.find(item => item.id === currentCategory);
    const tags = activeCategoryData ? activeCategoryData.tags : [];
    return (
        <div className={css.course_nav}>
            <div className={css.course_nav_category_btn}>
                {filterButtonData.map((props) => (
                    <FilterButton
                        key={props.id}
                        {...props}
                        isActive={currentCategory === props.id}
                        setIsActive={() => handleCategoryChange(props.id)}
                    />
                ))}
            </div>
            <div className={css.course_nav_tags}>
                {tags.map((tag) => (
                    <Button
                        key={tag.id}
                        text={tag.name}
                        onClick={() => handleTagChange(tag.id)}
                        buttonType="gradient"
                        width="max-content"
                        height="50px"
                    />
                ))}
            </div>
        </div>
    )
}
