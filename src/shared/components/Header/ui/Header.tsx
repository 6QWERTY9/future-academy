import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import LogoDark from  '@assets/logo-dark.svg?react';
import LogoLight from '@assets/logo-light.svg?react';
import LoginIconLight from '@assets/login_light.svg?react';
import LoginIconDark from '@assets/login_dark.svg?react';


import { HeaderNav } from './components/HeaderNav';

import { CityList, CitySelector } from './components/CitySelector';
import { cities } from '../model/data';

import css from './index.module.scss';


export default function Header({theme}: {theme: 'dark' | 'light'}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Новосибирск');

  const handleCityChange = (cityName: string) => {
    if (cityName === selectedCity) return;
    
    setSelectedCity(cityName);
    setIsOpen(false)
    
    console.log(`Выбранный город: ${cityName}`);
};
  const handleCityOpen = () => {
    setIsOpen(true);
  }
  const handleCityClose = () => {
    setIsOpen(false)
  }
  
  const isDark = theme === 'dark';

  const Logo = isDark ? LogoLight : LogoDark;
  const LoginIcon = isDark ? LoginIconLight : LoginIconDark;

  return (
    <header className={clsx(css.header, css[theme])}>
      <div className={clsx(css.header_content, 'content_center')}>
        <div className={css.logo_wrapper}>
          <Link to={'/'}>
            <Logo/>
          </Link>
        </div>
        <div className={css.navigation_wrapper}>
          <HeaderNav
            theme={theme}
          />
        </div>
        <div className={css.city_selector_wrapper}>
          <CitySelector
            isOpen={isOpen}
            selectedCity={selectedCity}
            onClick={handleCityOpen}
            theme={theme}
          />
        </div>
        <div className={css.contact_us}>
          <a href="tel:88009503398 " className={clsx(css.contact, css[theme])}>
            8 800 950-33-98 
          </a>
        </div>
        <div className={css.login_wrapper}>
          <Link to={'/login'} className={clsx(css.login_link, css[theme])}>
            <LoginIcon/>
            Войти
          </Link>
        </div>
      </div>
      <CityList
        isOpen={isOpen}
        cities={cities}
        onCityChange={handleCityChange}
        onClose={handleCityClose}
      />
    </header>
  )
}
