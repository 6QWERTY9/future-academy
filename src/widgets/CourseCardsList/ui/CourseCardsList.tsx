import { CourseCard } from "@entities/CourseCard";
import { COURSES_DATA } from "@entities/CourseCard/model/data";
import type { CourseCardProps } from "@entities/CourseCard/model/types";
import { CourseCardModal } from "@entities/CourseCard/ui/components/CourseCardModal";
import { Button } from "@shared/components/Button";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import css from './index.module.scss';

export const CourseCardsList = () =>  {
  const [searchParams, setSearchParams] = useSearchParams();

  // Состояние для хранения данный выбранного курса для модалки
  const [selectedCourse, setSelectedCourse] = useState<CourseCardProps | null>(null);

  // 1. Получаем фильтры из url
  const activeCategory = searchParams.get('category');
  const activeTag = searchParams.get('tag');
  const activeLevel = searchParams.get('level');
  const activeType = searchParams.get('type');
  const activeDuration = Number(searchParams.get('duration')) || 24;

  //2. фильтруем список 
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesLevel = !activeLevel || activeLevel === 'all' || course.level === activeLevel;
      const matchesType = !activeType || activeType === 'all' || course.type === activeType;
      const matchesDuration = course.studyDuration <= activeDuration;
      const matchesCategory = !activeCategory || activeCategory === 'all' || course.category === activeCategory;
      const matchesTag = !activeTag || activeTag === 'all' || course.tag === activeTag;

      
      return matchesLevel && matchesType && matchesDuration && matchesCategory && matchesTag;
    })
  }, [activeLevel, activeType, activeDuration,activeCategory, activeTag])

  console.log('URL Tag:', activeTag, 'First Course Tag:', filteredCourses[0]?.tag);
  return (
    <div className={css.course_cards_list}>
      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id} 
          {...course} 
          onOpen={() => setSelectedCourse(course)} // Передаем объект курса в стейт
        />
      ))}
      {selectedCourse && (
        <CourseCardModal
          isOpen={!!selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
          {...selectedCourse} 
        />
      )}
      {filteredCourses.length === 0 && (
        <div className={css.course_cards_list_error}>
          Курсов с такими параметрами не нашлось
          <Button
            buttonType="default"
            text="Сбросить фильтры"
            onClick={() => setSearchParams({})}
          />
        </div>
      )}
    </div>
  )
}
