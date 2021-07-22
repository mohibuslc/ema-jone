import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import '../Product/Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);

    const {name , price, img, seller,stock,key} = props.product;

    return (
        <div className = "products">
            <div>
                <img src={img}alt=" Product_img" />
            </div>
            <div>
            <h2 classname="product_name"><Link to ={"/product/"+key}>{name}</Link></h2>

            <p><small>by: {seller}</small></p>
            <hr/>
            <p><small>Price: {price}</small></p>
            <hr/>
            <p><small>Product_LeftStock: {stock}</small></p>
            <hr/>
            <button className="main-button" onClick = {()=> props.handleAddProduct(props.product)}
            
            
            >
                
                
                <FontAwesomeIcon icon={faShoppingCart} />
                
                
                Add to cart</button>
            
            </div>
        </div>
    );
};

export default Product;