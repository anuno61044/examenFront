import ContainerItems from "../../components/ContainerItems/ContainerItems";
import NavBar from "../../components/Navbar/NavBar";
import './styles.css'


function IngredientsList() {

    return (
        <div className="ingredientslist-content">
            <div className="black"></div>
            <div className="main-content">
                <NavBar/>
                <h1 className="topic"><i>"Elige los ingredientes correctos para una receta perfecta."</i></h1>
            </div>

            <ContainerItems type={'Ingredientes'}/>
        </div>
    )
}

export default IngredientsList