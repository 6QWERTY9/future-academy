import { ReactSVG } from "react-svg"
import type { socialLinkProps } from "../model/types"
import { getAssetPath } from "@shared/lib/getPath"
import { socialLinksData } from "../model/data"

import css from './index.module.scss';

export default function SocialLinks() {
  return (
    <div className={css.social_links}>
      {socialLinksData.map((items) => (
        <SocialLink key={items.key} {...items}/>
      ))}
    </div>
  )
}

export const SocialLink: React.FC<socialLinkProps> = ({label,link, iconSrc}) => {
  return (
    <a href={link} aria-label={label} target="_blank" rel="noopener noreferrer" className={css.social_link}>
      <ReactSVG src={getAssetPath(iconSrc)} width={'20px'} height={'20px'}/>
    </a>
  )
}
