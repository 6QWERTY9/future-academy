import { getAssetPath } from "@shared/lib/getPath";
import css from './index.module.scss';
import type { PersonCardProps } from "../model/types";


export default function PersonCard({id, name, photo, position}: PersonCardProps) {
  return (
    <div className={css.person_card_wrapper}>
      <div className={css.person_card_image_wrapper}>
        <div className={css.person_card_image_border}>
          <img src={getAssetPath(photo)} alt={name} className={css.person_image}/>
        </div>
        
      </div>
      <div className={css.person_card_text_wrapper}>
        <h3 className={css.person_name}>{name}</h3>
        <p className={css.person_desc}>
          {position}
        </p>
      </div>

    </div>
  )
}
