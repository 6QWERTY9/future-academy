
export interface ModalProps extends React.ComponentPropsWithoutRef<'dialog'> {
    isOpen?: boolean;
    onClose?: () => void;

    id?: string;
    title?: string;
    fullDescription?: string;
    studyDuration?: string;
    discount?: string;
    price?: string;
    category?: string;
}

