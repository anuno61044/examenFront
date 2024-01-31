export interface tpIngredient {
    id: number,
    nombre: string,
    foto:string,
    cantidad_disponible:number
}

export interface tpRecipe {
    id: number,
    nombre: string,
    ingredientes:tpIngredient[],
    instrucciones: string,
    foto: string
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