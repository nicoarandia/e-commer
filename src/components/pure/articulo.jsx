import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../store/storeProducts';
import Layout from '../container/layout';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Articulo = () => {
    
    const [product, setProduct] = useState(null);
    const params = useParams();
    const store = useAppContext();
    
    useEffect(() => {
        const product = store.getProduct(params.cardId)
        setProduct(product)
    }, []);

    

    if(!product){
        return(
            <Layout>
                <h2>
                    Producto No encontrado
            </h2>
            </Layout>
        )   
    }

    return (
        <Layout>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product?.cover} />
        <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
            {product?.description}   
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio: $  {product?.precio}</ListGroup.Item>
        </ListGroup>
        </Card> 
        </Layout>
    );
}

export default Articulo;
