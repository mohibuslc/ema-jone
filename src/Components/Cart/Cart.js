import React from 'react';

const Cart = (props) => {

const cart = props.cart;
let total =0;
for (let  i=0; i<cart.length; i++){

    const prd = cart[i];
    total=total+prd.price;

}
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Iteam Length :{cart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;