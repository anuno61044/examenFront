import './styles.css'
import img from "../../images/qrico.png"

function NavBar() {

    return (
        <>
            <nav className="navbar d-flex align-items-center justify-content-center">
                <div>
                    <img id="logo-qrico" src={img} alt="logo"/>
                </div>
                <ul className="mb-2 d-flex">
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
            </nav>
        </>
    )
} export default NavBar