import React, {useState} from 'react';

function RecipeForm() {
    const [recipe, setRecipe] = useState({
            nombre: "",
            instrucciones: "",
            foto: ""
        } 
    )

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

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Foto"
                        name="Foto"
                        value={recipe.foto}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="form-group d-flex flex-column align-items-center">
                    <input type="submit" value="Añadir" className="btn btn-dark login_btn"/>
                </div>
            </form>
        </>
    )
}

export default RecipeForm 