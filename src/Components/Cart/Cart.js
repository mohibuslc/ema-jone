import React from 'react';

const Cart = (props) => {

const cart = props.cart;
let total =0;
for (let  i=0; i<cart.length; i++){

    const prd = cart[i];
    total=total+prd.price;

}
let shipping = 0;

if (total >35){

    shipping=0;

}
else if (total >15){
    shipping=4.99
}
else if ( total >0){
    shipping =12.99
    
}


const tax = Math.round(total/10);

const grandtotal =(total+shipping+tax);
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Iteam Length :  {cart.length}</p>
            <p>Total Price: {total}</p>
            <p><small> Tax + Vat : {tax}</small></p>
            <p>Shipping Cost : {shipping}</p>
            <p>Total Price + Shipping Cost: {grandtotal}</p>
        </div>
    );
};

export default Cart;