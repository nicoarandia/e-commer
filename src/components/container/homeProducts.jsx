import React from 'react';
import CarouselComponent from '../pure/carousel';
import NavBar from '../pure/navBar';
import ContainerCards from './containerCards';


const HomeProducts = () => {

    return (
        <div>
            <NavBar/>
            <CarouselComponent></CarouselComponent>
            <ContainerCards></ContainerCards>
        </div>
    );
}

export default HomeProducts ;
