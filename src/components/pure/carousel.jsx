import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import vestite from '../../images/carouselImages/image1.jpg'
import vestiteLinda from '../../images/carouselImages/image2.jpg'
import makeUpp from '../../images/carouselImages/image3.jpg'
import Image from 'react-bootstrap/Image'
import '../../style/styleCarousel.css'

const CarouselComponent = () => {

    

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block"
            src= {vestite}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image
            className="d-block "
            src={vestiteLinda}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block"
            src={makeUpp}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
