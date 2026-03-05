import { Input } from "@shared/components/Input"
import { useSearchParams } from "react-router-dom";
import css from './index.module.scss';
import clsx from "clsx";
export const CourseFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /*
    Функция для обновления любового фильтра url
    @params name - ключ фильтра (level, type, duration)
    @params value - значения фильтра
  */
  const updateFilter = (name: string, value: string) => {
    // 1. Копия текущих параметров, чтобы не мутировать оригинал
    const newParams = new URLSearchParams(searchParams);

    // 2. Если значение пустое или all , удаляем ключи из url
    if (!value || value == 'all' ) {
      newParams.delete(name);
    } else {
      // 3. Устанавливаем новое значение в url
      newParams.set(name, value);
    }

    // 4. Обновляем url
    setSearchParams(newParams);
  }

  // Получаем текущие значение для пропсов (чтобы инпуты знали, что они checked)

  const activeLevel = searchParams.get('level') || 'novice';
  const activeType = searchParams.get('type') || 'any';
  const activeDuration = searchParams.get('duration') || '24';
  return (
    <div className={css.course_filter_wrapper}>
        <form className={css.filter_form_wrapper} onSubmit={(e) => e.preventDefault()}>
          <fieldset className={css.filter_form}>
            <legend className={css.title}>Уровень сложности</legend>
            <Input 
            type="radio" 
            label="Новичок" 
            id=""
            value={'novice'}
            name="level"
            checked={activeLevel === 'novice'}
            onChange={(e) => updateFilter('level', e.target.value)}
            />
            <Input 
            type="radio" 
            label="Пользователь" 
            id=""
            value="intermediate"
            name="level"
            checked={activeLevel === 'intermediate'}
            onChange={(e) => updateFilter('level', e.target.value)}
            />
            <Input 
            type="radio" 
            label="Профессионал" 
            id=""
            value="pro"
            name="level"
            checked={activeLevel === 'pro'}
            onChange={(e) => updateFilter('level', e.target.value)}
            />
          </fieldset>
        </form>
        <form className={css.filter_form_wrapper} onSubmit={(e) => e.preventDefault()}>
          <fieldset className={css.filter_form}>
            <legend className={css.title}>Тип обучения</legend>
            <Input 
            type="radio" 
            label="Любой" 
            id=""
            value={'any'}
            name="type"
            checked={activeType === 'any'}
            onChange={(e) => updateFilter('type', e.target.value)}
            />
            <Input 
            type="radio" 
            label="Профессия" 
            id=""
            value="profession"
            name="type"
            checked={activeType === 'profession'}
            onChange={(e) => updateFilter('type', e.target.value)}
            />
            <Input 
            type="radio" 
            label="Курс" 
            id=""
            value="course"
            name="type"
            checked={activeType === 'course'}
            onChange={(e) => updateFilter('type', e.target.value)}
            />
          </fieldset>
        </form>
        <form className={css.filter_form_wrapper} onSubmit={(e) => e.preventDefault()}>
          <fieldset className={clsx(css.filter_form, css.duration)}>
            <legend className={css.title}>Длительность</legend>
            <span className={css.duration_text}>от 1 до 24 месяцев</span>
            <Input 
              type="range"
              max={24}
              min={1}
              step={1}
              value={Number(activeDuration)}
              label="от 1 до 24 месяцев"
              id=""
              onChange={(val) => updateFilter('duration', String(val))}
              name="duration"
            />
          </fieldset>

        </form>
    </div>
  )
}
