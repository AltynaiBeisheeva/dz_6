import React from 'react';
import {useSelector} from "react-redux";
import img from "../img/pizza.png";

const CartPage = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div>
            {cart.map((product)=>(
                <div key={product._id}>
                    <img style={{width:"100px"}} src={img} alt="pizza"/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>

                </div>
            ))}
        </div>
    );
};

export default CartPage;