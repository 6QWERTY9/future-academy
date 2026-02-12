import clsx from 'clsx';

import type { CitySelectorProps } from '../model/types';

import LocationDarkIcon from '@assets/location-dark.svg?react';
import LocationLightIcon from '@assets/location-light.svg?react';
import ArrowDarkIcon from '@assets/arrow-dark.svg?react';
import ArrowLightIcon from '@assets/arrow-light.svg?react';

import css from './index.module.scss';




export const CitySelector: React.FC<CitySelectorProps> = ({theme='dark', selectedCity, onClick, isOpen}) => {
  const isDark = theme === 'dark';

  const LocationIcon = isDark ? LocationLightIcon : LocationDarkIcon;
  const ArrowIcon = isDark ? ArrowLightIcon : ArrowDarkIcon;
  return (
    <div 
      className={css.city_selector_wrapper}
      role='button' 
      tabIndex={0} 
      aria-label={`Выбраный город: ${selectedCity}`}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <div className={css.city_selector_location_icon_wrapper}>
        <LocationIcon/>
      </div>
      <div 
        className={css.selected_city_wrapper} 

        >
        <span className={clsx(css.selected_city, css[theme])}>
          {selectedCity}
        </span>
      </div>

      <div className={css.city_selector_arrow_is_open_icon_wrapper}>
        <ArrowIcon 
          width="10px" 
          height="10px" 
          className={clsx(css.arrow_icon, { [css.open]: isOpen })} 
        />
      </div>
    </div>  
  )
}
