import { ItemTypeProps } from '../../files/interfaces';
import Item from '../Item/Item'
import './styles.css'
import ItemModal from '../Modal/ItemModal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ContainerItems({type}:ItemTypeProps) {

    const data = [
        { title: 'Titulo 1', photo: '../../images/plate.jpg' },
        { title: 'Titulo 2', photo: '../../images/plate.jpg' },
        { title: 'Titulo 3', photo: '../../images/plate.jpg' },
        { title: 'Titulo 1', photo: '../../images/plate.jpg' },
        { title: 'Titulo 2', photo: '../../images/plate.jpg' },
        { title: 'Titulo 3', photo: '../../images/plate.jpg' },
        { title: 'Titulo 1', photo: '../../images/plate.jpg' },
        { title: 'Titulo 2', photo: '../../images/plate.jpg' },
        { title: 'Titulo 3', photo: '../../images/plate.jpg' },
        { title: 'Titulo 4', photo: '../../images/plate.jpg' }
        // Añade más objetos aquí
    ];

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
                <ItemModal handleClose={handleClose} type={type} show={show}/>
            </div>
            <div className="items">
                {data.map((item) => (
                    <Item title={item.title} photoUrl={item.photo}/>
                ))}
            </div>
        </div>
    )
} export default ContainerItems