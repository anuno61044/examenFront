export interface tpItem {
    id?: number,
    nombre: string,
    foto:string
}

export interface tpIngredient extends tpItem {
    cantidad_disponible:number
}

export interface tpRecipe extends tpItem{
    ingredientes:tpIngredient[],
    instrucciones: string
}

export interface tpPlate {
    receta: tpRecipe
    porciones: number
}

export interface tpMenu {
    id:number,
    nombre: string,
    descripcion: string,
    platos: tpPlate[]
}