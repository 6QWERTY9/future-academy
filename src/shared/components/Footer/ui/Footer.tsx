import clsx from "clsx";
import { FooterNavData } from "../model/data";
import { FooterContacts } from "./components/FooterContacts";
import { FooterNavLinksList } from "./components/FooterNavLinksList/ui/FooterNavLinksList";

import css from './index.module.scss';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={clsx(css.footer_content, 'content_center')}>
        <FooterContacts/>
        <nav className={css.footer_nav}>
          {FooterNavData.map((navList) => (
            <FooterNavLinksList
            title={navList.title}
            links={navList.links}
            key={`footer_nav_key_${navList.title}`}
            />
          ))}
        </nav>
      </div>
    </footer>
  )
}
