import React, {useState} from 'react';

function MenuForm() {
    const [menu, setMenu] = useState({
            nombre: "",
            descripcion: ""
        } 
    )

    const handleSubmit = () => {
        // manejar el fetching de datos
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        
        switch(e.target.name){
            case "nombre":
                setMenu({...menu, nombre: e.target.value});
                break;
            case "descripcion":
                setMenu({...menu, descripcion: e.target.value});
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
                        value={menu.nombre}
                        onChange={(e) => onInputChange(e)}
                    /> 
                </div>
                <div className="input-group form-group">
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Descripción"
                        name="descripcion"
                        value={menu.descripcion}
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

export default MenuForm 