import React from 'react';
import data from "../data/Data.json"
import img from "../img/pizza.png"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/Store.js";
const MainPage = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
    }

    return (
        <div>
            {data.map( (product)=>(
                <div key={product._id}>
                    <img style={{width:"100px"}} src={img} alt="pizza"/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>handleAddToCart(product)}>Добавить в корзину</button>
                </div>

            ))         
            
            }
        </div>
    );
};

export default MainPage;