import clsx from "clsx"
import type { CityListProps } from "../model/types"

import css from './index.module.scss'

import CloseIcon from '@assets/close.svg?react'


export const CityList: React.FC<CityListProps> = ({cities, onCityChange, onClose, isOpen}) => {
    return (
        <div className={clsx(css.city_list_wrapper, {[css.open]: isOpen})}>
            <div className={css.city_list_title_wrapper}>
                <h2 className={css.city_list_wrapper_title}>
                    Выберите свой город
                </h2>
                <button onClick={onClose} className={css.city_list_wrapper_close_btn} aria-label="Закрыть меню выбора города">
                    <CloseIcon/>
                </button>
            </div>

            <div className={css.city_list}>
                {cities.map((city) => (
                    <div
                        className={css.city_option}
                        key={city.key}
                        onClick={() => {onCityChange(city.cityName)}}
                        role="button"
                        tabIndex={0}
                    >
                        <span className={css.city_name}>
                            {city.cityName}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}