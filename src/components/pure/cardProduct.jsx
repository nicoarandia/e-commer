import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import '../../style/styleCardProduct.css'

const CardProduct = ({product}) => {

    const handleError = ({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="image/remeraOscura.jpg";
    }
    
    
    return (
        <div className='cardProduct'>
            <Card style={{ width: '18rem' }}>
            <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.cover} onError={handleError} />
            </Link>
        <Card.Body>
            <Card.Title>{product.title}{console.log(product.title)}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>${product.precio}</ListGroup.Item>
            <ListGroup.Item>Numero de Prenda:{product.id}</ListGroup.Item>
            <ListGroup.Item>
                <Card.Title>
                    {product.oferta? ("En OFERTA"):("Disponible")}
                    {console.log(product.oferta)}
                </Card.Title>
            </ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Link to={`/product/${product.id}`}>Ver Producto</Link>
        </Card.Body>
        </Card>
        </div>
    );  
}

export default CardProduct;
