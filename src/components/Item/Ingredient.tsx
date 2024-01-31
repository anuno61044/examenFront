import { ItemProps } from '../../files/interfaces'
import img from '../../images/plate.jpg'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ItemModal from '../Modal/ItemModal';

function Ingredient({ id, title, photoUrl }: ItemProps) {


    const editItem = () => {
        console.log(`item ${id} editado`)

        // hacer modal para editar los datos
        handleShow()
    }
    
    const deleteItem = () => {
        // hacer fetch para eliminar el item de la base de datos
        console.log(`item ${id} eliminado`)
    }

    // Gestionar la vista del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <div className="item-ingredient">
            <div className="img-item">
                <img src={photoUrl || img} alt="menu-photo"/>
            </div>
            <div className="body-item">
                <p>{title}</p>
                <div className="actions-items">
                    <FontAwesomeIcon icon={faPencilAlt} onClick={editItem}/>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={deleteItem}/>
                </div>
            </div>

            <ItemModal handleClose={handleClose} id={id} type={"edit"} show={show}/>
        </div>
    </>
    )
} export default Ingredient