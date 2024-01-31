import UserModal from "../Modal/UserModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import './styles.css'

function NavBar() {

    // Gestionar la vista del modal para gestionar usuarios
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (type:string) => {
        setType(type)
        setShow(true)
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid ms-5 me-5">
                    <a className="navbar-brand" href="#">Q'rico</a>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <a className="nav-link active text-light" href="/">Home</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link active text-light" href="/menus-list">Menus</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-light" href="/recipes-list">Recetas</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-light" href="/ingredients-list">Ingredientes</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <Button className="text-light" variant="" onClick={() => handleShow("register")}>
                                    Registrarme
                                </Button>
                            </li>
                            <li className="nav-item border rounded me-3">
                                <Button className="text-light" variant="" onClick={() => handleShow("login")}>
                                    Iniciar Sesión
                                </Button>
                            </li>
                        <UserModal handleClose={handleClose} type={type} show={show}/>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
} export default NavBar