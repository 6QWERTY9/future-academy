import { useState } from "react";
import type { AccordionItemProps } from "../model/types";

import css from './index.module.scss';
import clsx from "clsx";

export default function AccordionItem({question, answer}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={clsx(css.accordion_item, {[css.open]: isOpen})}>
      <div className={css.accordion_item_header} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={css.question}>{question}</h3>
        <div className={clsx(css.icon_wrapper, {[css.open]: isOpen})}>
          
        </div>
      </div>

      <div className={clsx(css.content_wrapper, {[css.open]: isOpen})}>
          <div className={css.content}>
            <p className={css.answer}>{answer}</p>
          </div>
      </div>
    </div>
  )
}
