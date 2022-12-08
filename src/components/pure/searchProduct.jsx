import axios from 'axios';
import React,{useState, useEffect} from 'react';
import CardProduct from './cardProduct';

const SearchProduct = () => {

    useEffect(() => {
        
        return () => {
            axios.get(`http://maquillaje-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
            .then(response => setProducts(response.data))
        };
    }, []);

    const [query, setQuery] = useState("lipstick");
    const [products, setProducts] = useState([]);

    const handleChange = (e) =>{
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`)
        .then(response => setProducts(response.data))
    }

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder='Type to search...' type="text"></input>
                    <button type='submit' className='m-2 btn btn-primary'>Search</button>
                </form>
                <ul>
                    {products.map((product,index) => {
                        return(
                            <CardProduct product={product} key={index} >
                                {product.name}
                            </CardProduct>
                            
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}

export default SearchProduct;
