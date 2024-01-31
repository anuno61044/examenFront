import { ItemTypeProps } from '../../files/interfaces';
import Item from '../Item/Ingredient'
import './styles.css'
import ItemModal from '../Modal/ItemModal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { tpItem } from '../../files/types';
import { itemFetchGETall } from '../../helper/server';

function ContainerItems({type}:ItemTypeProps) {

    const [data, setData] = useState<tpItem[]>([])

    useEffect(() => {
        switch (type) {
            case "Menús":
                itemFetchGETall("menus", setData)
                break;
            case "Recetas":
                itemFetchGETall("recetas", setData)
                break;
            case "Ingredientes":
                itemFetchGETall("ingredientes", setData)
                break;
            default:
                break;
        }
    },)
       

    // Clase del contenedor de los items según su tipo
    const str:string = `container-${type}-items`

    // Gestionar la vista del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={str}>
            <div className="header">
                <h2 className='text-light'>{type}</h2>
                <Button className="text-light" variant="" onClick={handleShow}>
                    Añadir
                </Button>
                <ItemModal handleClose={handleClose} id={0} type={type} show={show}/>
            </div>
            <div className="items">
                {data.map((item) => (
                    <Item type={type} title={item.nombre} photoUrl={item.foto}/>
                ))}
            </div>
        </div>
    )
} export default ContainerItems