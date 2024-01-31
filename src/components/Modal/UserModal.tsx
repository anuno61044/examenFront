import Modal from 'react-bootstrap/Modal';
import { UserModalProps } from '../../files/interfaces';
import RegisterForm from '../Form/RegisterForm'; 
import LoginForm from '../Form/LoginForm';

// Vista para mostrar el Modal
function UserModal({handleClose, type, show}:UserModalProps) {

    let content;
    let header;
    switch (type) {
        case "register":
            content = <RegisterForm/> // formulario de registrar
            header = "Bienvenido nuevo usuario"
            break;
        case "login":
            content = <LoginForm/> // formulario de loguear
            header = "Bienvenido" 
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

export default UserModal;
