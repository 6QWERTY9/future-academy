import clsx from 'clsx';
import css from './index.module.scss';
import type { BentoCardProps } from './model/types';
import { Button } from '@shared/components/Button';

export const BentoGridCard: React.FC<BentoCardProps> = (props) => {
    // Извлекаем все пропсы на верхний уровень
    const { 
        title, desc, dateDay,dateMonth, icon, 
        background, gridArea, contentDirection, className,
        buttonText, onButtonClick, href 
    } = props;

    // Стили для внешней обертки (Grid контейнер)
    const containerStyle = {
        ...(background && { '--bento-grid-card-background': background }),
        ...(gridArea && { '--bento-grid-card-grid-area': gridArea }), 
    }

    // Стили для контента (Flex контейнер)
    const contentStyle = {
        ...(contentDirection && { '--bento-grid-card-flex-direction-content': contentDirection })
    }

    // Внутренняя разметка (чтобы не дублировать код для Link и Div)
    const renderContent = (
        <div className={css.bento_grid_card_content} style={contentStyle}>
            {icon && <div className={css.icon_wrapper}>{icon}</div>}
            {dateDay && (
                <div className={css.date_block}>
                    <span className={css.day}>{dateDay}</span>
                    <span className={css.month}>{dateMonth}</span>
                </div>
            )}
            
            
            <div className={css.bento_grid_card_text_content}>
                <h3 className={css.title}>{title}</h3>
            
                {desc && <p className={css.description}>{desc}</p>}
            </div>
            

            {/* Рендерим кнопку, только если передан текст кнопки */}
            {buttonText && (
                <Button
                    text={buttonText}
                    onClick={onButtonClick}
                    buttonType="outline"
                    
                    width='222px'
                    height='50px'
                />
            )}
        </div>
    );

    // Если есть href — рендерим ссылку, иначе обычный div
    if (href) {
        return (
            <a href={href} className={clsx(css.bento_grid_card, className, css.bento_route_card)} style={containerStyle}>
                {renderContent}
            </a>
        );
    }

    return (
        <div className={clsx(css.bento_grid_card, className)} style={containerStyle}>
            {renderContent}
        </div>
    );
};

