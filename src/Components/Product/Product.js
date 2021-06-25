import React from 'react';
import '../Product/Product.css';

const Product = (props) => {

    const {name , price, img, seller,stock} = props.product;

    return (
        <div className = "products">
            <div>
                <img src={img}alt=" Product_img" />
            </div>
            <div>
            <h2 classname="product_name">{name}</h2>

            <p><small>by: {seller}</small></p>
            <hr/>
            <p><small>Price: {price}</small></p>
            <hr/>
            <p><small>Product_LeftStock: {stock}</small></p>
            
            </div>
        </div>
    );
};

export default Product;