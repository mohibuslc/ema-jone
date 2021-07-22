import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import '../../Components/Shop/Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {

const first10 =fakeData.slice (0,10);
const[products , Products]=useState(first10);
const[cart,setCart]=useState([]);

const handleAddProduct = (product) => {

    const newCart=[...cart, product];
    setCart (newCart);


   // console.log('Added Product');

}
    return (
        <div className ="shop-container">
            <div className="product-container">
       
                
                    {

            products.map(pd => <Product handleAddProduct={handleAddProduct}
                        
                        
                        
                        product={pd}>


                        </Product>)
                    }
                    
            
                </div>
          
            <div className="cart-container">
                    <Cart cart={cart}></Cart>

                
            </div>


     
       
        </div>

       
    );
};

export default Shop;