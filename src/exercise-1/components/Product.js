import React from 'react';
import {BrowserRouter, Link, Switch, Route, useParams } from 'react-router-dom'
import data from '../../exercise-2/mockups/data.json'
export default function Products (){
        return (
            <BrowserRouter>
                <div>
                    <p>All Product</p>
                    <Switch>
                        <Route exact path="products" children={<productList/>}></Route>
                        <Route path="products/:id" children={<Child/>} />
                   </Switch>
                </div>
            </BrowserRouter>
               
        );
};
    

const productList = () => {
    return (
        <div>
            <p>All Products</p>
            {Object.values(data).map(product => (
                    <p key={product.id}>
                        <Link to={'/products/${product.id}'}>{product.name}</Link>
                    </p>))}
           
        </div>
    );
};


const Child = () => {
    let { id } = useParams();
    console.log(id)
    let product = Object.values(data).filter(item => item.id === id)[0];
    console.log(product)
    return (
        <div>
            <h3>Product Details</h3>
            <p>Name: {product.name}</p>
        </div>
    );


}