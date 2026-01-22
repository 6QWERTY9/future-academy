import 'react';

declare module 'react' {
    interface CSSProperties {
        '--button-width'?: string;
        '--button-height'?: string;
    }
}