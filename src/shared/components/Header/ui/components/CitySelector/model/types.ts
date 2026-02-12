export interface CityListProps {
    cities: CityProps[]; // список городов для отображения

    onCityChange: (cityName: string) => void; // функция для смены города
    onClose: () => void;
    isOpen: boolean; // булево значения открыт ли меню для выбора города
}

export interface CitySelectorProps {
    theme: 'dark' | 'light';
    selectedCity: string;
    isOpen: boolean;
    onClick: () => void;
}

export interface CityProps {
    cityName: string;
    key: string;
}