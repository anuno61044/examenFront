import ContainerItems from "../../components/ContainerItems/ContainerItems";
import NavBar from "../../components/Navbar/NavBar";
import "./styles.css"


function RecipesList() {

    return (
        <div className="recipeslist-content">
            <div className="black"></div>
            <div className="main-content">
                <NavBar/>
                <h1 className="topic"><i>"Disfruta la magia de la cocina con nuestras recetas."</i></h1>
            </div>

            <ContainerItems type={'Recetas'}/>
        </div>
    )
}

export default RecipesList