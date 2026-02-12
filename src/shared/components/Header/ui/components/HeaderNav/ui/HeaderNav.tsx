import clsx from 'clsx';
import css from './index.module.scss';
import type { HeaderNavProps } from '../model/types';
import { Link } from 'react-router-dom';
import { HeaderNavData } from '../model/data';


export const HeaderNav: React.FC<HeaderNavProps> = ({ theme='dark'}) => {
  return (
    <nav className={clsx(css.header_nav)} role='navigation'>
      <ul className={css.header_nav_links_wrapper}>
        {HeaderNavData.map((link) => (
          <li className={css.header_nav_link_wrapper} key={link.key}>
            <Link to={link.link} className={clsx(css.header_nav_link, css[theme])} aria-label={link.label}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
