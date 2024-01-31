import Modal from 'react-bootstrap/Modal';
import { UserModalProps } from '../../files/interfaces';
import RecipeForm from '../Form/RecipeForm'; 
import MenuForm from '../Form/MenuForm'; 
import IngredientForm from '../Form/IngredientForm';

// Vista para mostrar el Modal
function ItemModal({handleClose, type, show}:UserModalProps) {

    let content;
    let header;
    switch (type) {
        case "Recetas":
            content = <RecipeForm/> // formulario de recetas
            header = "Crear una receta"
            break;
        case "Menús":
            content = <MenuForm/> // formulario de menus
            header = "Crear un menú" 
            break;
        case "Ingredientes":
            content = <IngredientForm/> // formulario de ingredientes
            header = "Crear un ingrediente"
            break;
        default:
            break;
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {header}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ItemModal;
