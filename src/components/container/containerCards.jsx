import React from 'react';
import { useAppContext } from '../../store/storeProducts';
import CardProduct from '../pure/cardProduct';
import '../../style/styleContainerProducts.css'
import Layout from './layout';

const ContainerCards = () => {
    
    const store = useAppContext();

    return (
        <Layout>
            <div className='container-products'>
                {store.products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </Layout>
    );
}

export default ContainerCards;
