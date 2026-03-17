import FacebookIcon from '@assets/auth-social/facebook.svg?react';
import VkIcon from '@assets/auth-social/vk.svg?react';
import TelegramIcon from '@assets/auth-social/telegram.svg?react';

import css from './index.module.scss'

export default function AuthSocials() {
  return (
    <div className={css.auth_social_wrapper}>
      <FacebookIcon width={27} height={27} />
      <VkIcon width={27} height={27} />
      <TelegramIcon width={27} height={27} />
    </div>
  )
}
