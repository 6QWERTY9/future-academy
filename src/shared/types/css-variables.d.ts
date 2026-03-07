import 'react';

declare module 'react' {
    interface CSSProperties {
        '--button-width'?: string;
        '--button-height'?: string;
        '--button-border'?: string;
        '--radio-width'?: string;
        '--radio-height'?: string;
        '--checkbox-width'?: string;
        '--checkbox-height'?: string;

        '--text-input-width'?: string;
        '--text-input-height'?: string;
        '--range-height'?: string;
        '--range-width'?: string;
        '--fill-width'?: string;

        '--bento-grid-card-background'?: string;
        '--bento-grid-card-grid-area'?: string;
        '--bento-grid-card-flex-direction-content'?: string;
        
        '--details-page-stats-items-font-size'?: string;
        '--details-page-stats-items-font-weight'?: string;
    }
}