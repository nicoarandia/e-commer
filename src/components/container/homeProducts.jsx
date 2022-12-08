import React,{useState} from 'react';
import CarouselComponent from '../pure/carousel';
import NavBar from '../pure/navBar';
import SearchProduct from '../pure/searchProduct';

const HomeProducts = () => {

    const [products, setProducts] = useState(null);

    return (
        <div>
            <NavBar/>
            <CarouselComponent></CarouselComponent>
            <SearchProduct/>
        </div>
    );
}

export default HomeProducts ;
