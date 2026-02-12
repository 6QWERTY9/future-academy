export interface HeaderNavLink {
    link: string;
    label: string;
    key?: string;
}

export interface HeaderNavProps {
  theme?: 'dark' | 'light'; // 👈 Опционально — лучше задать дефолт в пропсах
}