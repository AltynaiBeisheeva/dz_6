import React from 'react';
import "./App.css"
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<MainPage/>} />
                    <Route path={"/cart"} element={<CartPage/>} />
                    <Route path={"*"} element={<ErrorPage/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;