import React, {useEffect, useState} from 'react';
import { ItemIdProps } from '../../files/interfaces';
import { recipeFetchGETone } from '../../helper/server';
import { tpIngredient, tpRecipe } from '../../files/types';
import { ingredientsFetchGETall } from '../../helper/server';

function RecipeForm({id}:ItemIdProps) {
    const [recipe, setRecipe] = useState<tpRecipe>({
        nombre: "",
        instrucciones: "",
        foto: "",
        ingredientes: [], 
        id: 0
    });

    const [ingredients, setIngredients] = useState<tpIngredient[]>([])

    useEffect(() => {
        loadRecipe()
        loadIngredients()
    },[])

    const loadRecipe = () => {
        if(id != null)
            recipeFetchGETone(`recetas/${id}`, setRecipe)
    }

    const loadIngredients = () => {
        ingredientsFetchGETall('ingredientes', setIngredients)
    }

    const handleSubmit = () => {
        // manejar el fetching de datos
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        
        switch(e.target.name){
            case "nombre":
                setRecipe({...recipe, nombre: e.target.value});
                break;
            case "instrucciones":
                setRecipe({...recipe, instrucciones: e.target.value});
                break;
            case "foto":
                setRecipe({...recipe, foto: e.target.value});
                break;
            default:
        }
    }

    // Select Handler
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = Array.from(event.currentTarget.selectedOptions, option => option.value);
        setSelectedOptions(selected);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group form-group">
                    <label htmlFor="Nombre" className='mb-2'>Nombre</label>
                </div>
                <div className="input-group form-group">
                    <input
                        type="text" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Nombre"
                        name="Nombre"
                        value={recipe.nombre}
                        onChange={(e) => onInputChange(e)}
                    /> 
                </div>
                <div className="input-group form-group">
                    <label htmlFor="Nombre" className='mb-2'>Instrucciones</label>
                </div>
                <div className="input-group form-group">
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Instrucciones"
                        name="Instrucciones"
                        value={recipe.instrucciones}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="input-group form-group">
                    <label htmlFor="Nombre" className='mb-2'>Foto</label>
                </div>
                <div className="input-group form-group">
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Foto"
                        name="Foto"
                        value={recipe.foto}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="input-group form-group">
                    <label htmlFor="Nombre" className='mb-2'>Ingredientes</label>
                </div>
                <div className="input-group form-group">
                <select multiple={true} value={selectedOptions} onChange={handleChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>
                </div>
                <div className="form-group d-flex flex-column align-items-center">
                    <input type="submit" value="Añadir" className="btn btn-dark login_btn"/>
                </div>
            </form>
        </>
    )
}

export default RecipeForm 