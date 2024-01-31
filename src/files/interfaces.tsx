import { tpIngredient, tpItem, tpMenu, tpRecipe } from "./types";

export interface ItemProps {
    type:string,
    title: string,
    photoUrl: string
}

export interface ItemTypeProps {
    type: string
}

export interface ItemIdProps {
    id: number
}


// Item Fetchs
export interface itemFetchProps {
    endpoint: string,
    init: tpItem,
    method: string
    setIngredient:React.Dispatch<React.SetStateAction<tpItem[]>>
}

export interface ingredientFetchProps {
    endpoint: string,
    init: tpIngredient,
    method: string
    setIngredient:React.Dispatch<React.SetStateAction<tpIngredient[]>>
}

export interface recipeFetchProps {
    endpoint: string,
    setRecipe:React.Dispatch<React.SetStateAction<tpRecipe>>
}

export interface menuFetchProps {
    endpoint: string,
    init: tpMenu,
    method: string
    setMenu:React.Dispatch<React.SetStateAction<tpMenu[]>>
}



// Item Modals
export interface IngredientModalProps {
    handleClose: () => void;
    data: tpIngredient;
    show: boolean
}

export interface ItemModalProps {
    handleClose: () => void;
    id: number;
    type: string;
    show: boolean;
}
export interface UserModalProps {
    handleClose: () => void;
    type: string;
    show: boolean
}