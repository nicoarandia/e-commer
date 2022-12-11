import React from 'react';
import Layout from './layout';
import { useAppContext } from '../../store/storeProducts';
import CardProduct from '../pure/cardProduct';


const OfertasProduct = () => {

    const store = useAppContext();
    


    return (
        <Layout>
            <div className='container-products'>
                {store.products.map((product) => ( product.oferta?
                    (<CardProduct key={product.id} product={product}/>): null 
                ))}
            </div>
        </Layout>
    );
}

export default OfertasProduct;
