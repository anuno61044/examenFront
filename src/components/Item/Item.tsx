import { ItemProps } from '../../files/interfaces'
import img from '../../images/plate.jpg'
import './styles.css'

function Item({ title, photoUrl }: ItemProps) {

    return (
    <>
        <div className="item">
            <div className="img-item">
                <img src={img} alt="menu-photo"/>
            </div>
            <div className="body-item">
                <p>{title}</p>
                <div className="actions-items">
                    <a href="#">editar</a>
                    <a href="#">eliminar</a>
                </div>
            </div>
        </div>
    </>
    )
} export default Item