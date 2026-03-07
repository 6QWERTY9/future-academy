import OwlImage from '@assets/owl.svg?react';
import type { AssistantBannerProps } from '../model/types';
import css from './index.module.scss';
import clsx from 'clsx';

export const AssistantBanner: React.FC<AssistantBannerProps> = ({owlSize, text}) => {

  const {title, paragraph} = text;
  const direction = owlSize === 'large' ? 'row-reverse' : 'column';

  return (
    <div className={css.assistant_banner_wrapper} style={{flexDirection: direction}}>
      <div className={clsx(css.banner, css[owlSize])}>
        <div className={css.banner_content}>
          {title && <h3 className={css.banner_title}>{title}</h3>}
          <p className={css.banner_paragraph}>
            {paragraph}
          </p>
        </div>
      </div>
      <OwlImage className={clsx(css.owl_img, css[owlSize])}/>
    </div>
  )
}
