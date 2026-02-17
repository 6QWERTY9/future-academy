import { Link } from 'react-router-dom';
import type { FooterNavLinksListProps } from '../model/types';
import css from './index.module.scss';

export const FooterNavLinksList: React.FC<FooterNavLinksListProps> = ({title, links}) => {
  return (
    <ul className={css.footer_nav_links_list}>
      <li className={css.footer_nav_links_list_title_wrapper}>
        <h3 className={css.footer_nav_links_list_title}>{title}</h3>
      </li>
      {links.map((link) => (
        <li className={css.footer_nav_link_wrapper} key={link.label}>
          <Link to={link.to} className={css.footer_nav_link} aria-label={link.label}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
