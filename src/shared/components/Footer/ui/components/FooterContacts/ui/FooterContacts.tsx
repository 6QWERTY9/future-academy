import Logo from '@assets/logo-light.svg?react';

import css from './index.module.scss';
import { socialLinkData } from '../model/data';
import { getAssetPath } from '@shared/lib/getPath';

export default function FooterContacts() {
  return (
    <div className={css.footer_contacts_wrapper}>
      <Logo width={'83px'} height={'58px'}/>
      <div className={css.footer_contact_us}>
        <a href="tel:88009503398" className={css.contact_tel}>8 800 950-33-98</a>
        <span className={css.contact_address}>г. Москва, ул. Ленина, д. 50</span>
        <a href='mailto:info@hodfutureacademy.ru' className={css.contact_email}>info@hodfutureacademy.ru</a>
      </div>
      <div className={css.footer_social_links}>
        {socialLinkData.map((link) => (
          <a href={link.link} key={link.key} target='_blank' rel="noopener noreferrer">
            <img src={getAssetPath(link.icon)} alt={link.alt} width={'18px'} height={'18px'} />
          </a>
        ))}
      </div>
      <small className={css.footer_copyright}>
        © ХОД, Future Academy
      </small>
    </div>
  )
}
