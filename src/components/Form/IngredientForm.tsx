import React, {useState} from 'react';

function IngredientForm() {
    const [ingredient, setIngredient] = useState({
        nombre: "",
        foto: "",
        cantidad_disponible:""
        } 
    )

    const handleSubmit = () => {
        // manejar el fetching de datos
    }

    // Actualizar el estado del Item cada vez que el usuario cambia 
    // los valores de sus propiedades
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        switch(e.target.name){
            case "nombre":
                setIngredient({...ingredient, nombre: e.target.value});
                break;
            case "foto":
                setIngredient({...ingredient, foto: e.target.value});
                break;
            case "cantidad_disponible":
                setIngredient({...ingredient, cantidad_disponible: e.target.value});
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
                        name="nombre"
                        value={ingredient.nombre}
                        onChange={(e) => onInputChange(e)}
                    /> 
                </div>
                <div className="input-group form-group">
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Foto"
                        name="foto"
                        value={ingredient.foto}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="input-group form-group">
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Cantidad disponible"
                        name="cantidad_disponible"
                        value={ingredient.cantidad_disponible}
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

export default IngredientForm 