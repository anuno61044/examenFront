import ContainerItems from "../../components/ContainerItems/ContainerItems";
import NavBar from "../../components/Navbar/NavBar";
import './styles.css'


function MenusList() {

    return (
        <div className="menuslist-content">
            <div className="black"></div>
            <div className="main-content">
                <NavBar/>
                <h1 className="topic"><i>"Explora nuestros menús y descubre nuevas experiencias culinarias."</i></h1>
            </div>

            <ContainerItems type={'Menús'}/>
        </div>
    )
}

export default MenusList