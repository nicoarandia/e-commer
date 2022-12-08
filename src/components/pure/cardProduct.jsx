import React from 'react';

const CardProduct = ({product}) => {

    const handleError = ({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="logo192.png";
    }

    return (
        <div className="card" style={{width: "50rem" , padding: "200px"}} >
            <img src={product.image_link} className="card-img-top" alt="Imagen not found" onError={handleError} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
            <p  className="card-text">
                {product.description}
            </p>
            <button className="btn btn-primary">
                See more
            </button>
            </div>
        </div>
    );  
}

export default CardProduct;
