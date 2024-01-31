export interface ItemProps {
    title: string,
    photoUrl: string
}

export interface ItemTypeProps {
    type: string
}

export interface ItemModalProps {
    handleClose: () => void;
    type: string;
    show: boolean
}
export interface UserModalProps {
    handleClose: () => void;
    type: string;
    show: boolean
}