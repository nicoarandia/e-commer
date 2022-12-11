import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../../../style/styleFormCreate.css';
import { useAppContext } from '../../../store/storeProducts';
import { useNavigate } from 'react-router-dom';
import Layout from '../../container/layout';


const CreateProduct = () => {

    const [title, setTitle] = useState('');
    const [oferta, setOferta] = useState(false);
    const [cover, setCover] = useState('');
    const [precio, setPrecio] = useState(0);
    const [description, setDescription] = useState('');

    const store= useAppContext();

    const navigate = useNavigate();

    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "title":
                setTitle(value)
                break;
            case "oferta":
                modifyOferta(value)
                break;
            case "cover":
                setCover(value)
                    break;
            case "precio":
                setPrecio(value)
                break;
            case "description":
                setDescription(value)
                break;
            default:
                break;
        }
    }

    const handleOnChangeFile= (e) => {
        const element = e.target;
        const file= element.files[0]
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend= function(){
            setCover(reader.result.toString())
        }
    }

    const modifyOferta = (value) =>{

        if (value === "1"){
            return setOferta(true)
        }
        if (value === "2"){
            return setOferta(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: crypto.randomUUID(),
            title,
            oferta,
            cover,
            precio,
            description
        };
        //TODO:MANDAR A REGISTRAR EL PRODUCTO
        store.createProduct(newProduct);
        navigate("/homePag")
    }
    

    return (
        <Layout>
        <div className='container-form-create'>
        <Form className='form-create' onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" >Titulo</InputGroup.Text>
            <Form.Control
                type='text'  
                placeholder="Nombre del producto" 
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="title" 
                value={title} 
                onChange={handleChange}
            />
            </InputGroup>
            
            <Form.Group className='mb-4'>
                <Form.Label>Producto en Oferta?</Form.Label>
                <Form.Select aria-label="Default select example" name="oferta" onChange={handleChange}  >
                <option  value="2">No </option>
                <option  value="1">Si</option>
                </Form.Select>
            </Form.Group>    

            <Form.Group controlId="formFile" className="mb-4">
                <Form.Label>Seleccione una imagen</Form.Label>
                <Form.Control type="file" name='cover' onChange={handleOnChangeFile} />
                <div>
                    {!! cover ? <img src={cover} width="200" alt="preview"/> : ""}
                </div>
            </Form.Group>

            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)"
                    type='number' 
                    name="precio" 
                    value={precio} 
                    onChange={handleChange} 
                    />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Descripcion del producto</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea"
                    type='text'
                    name="description" 
                    value={description} 
                    onChange={handleChange}
                    />
            </InputGroup>
            <Button as="input" type="submit" value="submit" className='btn-submit'/>
        </Form>
        </div>
        </Layout>
    );
}

export default CreateProduct;
