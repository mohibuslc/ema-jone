import React from 'react';
import {useParams} from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
const Productdetails = () => {

    const {productKey}= useParams();
const product =fakeData.find(pd=>pd.key === productKey)
//console.log(product)
    return (
        <div>
<h1>{productKey} Details Coming Very Sooon </h1>
<Product product={product}></Product>
        </div>
    );
};

export default Productdetails;