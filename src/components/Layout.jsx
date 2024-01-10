import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Layout = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            <header>
                <div>
                    Cart:{cart.length}
                </div>
                <NavLink to={"/"}>Main</NavLink>
                <NavLink to={"/cart"}>Cart</NavLink>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;