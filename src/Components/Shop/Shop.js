import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import '../../Components/Shop/Shop.css';
import Product from '../Product/Product';


const Shop = () => {

const first10 =fakeData.slice (0,10);
const[products , Products]=useState(first10);

    return (
        <div className ="shop-container">
            <div className="product-container">
       
                
                    {

                        products.map(pd => <Product product={pd}></Product>)
                    }
                    
            
                </div>
          
            <div className="cart-container">

                <h1>This is Cart:</h1>
                <hr></hr>



            </div>


     
       
        </div>

       
    );
};

export default Shop;