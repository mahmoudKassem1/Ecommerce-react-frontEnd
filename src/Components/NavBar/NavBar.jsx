import React, { useContext, useState, useEffect } from "react";
import './NavBar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom'; 
import { ShopContex } from "../../contex/ShopContex";

const NavBar = () => {
    const [menu, setMenu] = useState("shop");
    const [animate, setAnimate] = useState(false);

    const { cart_item } = useContext(ShopContex);
    const totalCartItems = Object.values(cart_item).reduce((acc, count) => acc + count, 0);

    useEffect(() => {
        if (totalCartItems > 0) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 300);
            return () => clearTimeout(timer);
        }
    }, [totalCartItems]);

    const linkStyle = { textDecoration: 'none', color: 'inherit' };

    return (
        <div className="NavBar">
            <div className="nav-logo">
                <img src={logo} alt="the logo" />
                <p className="title">Shopping</p>
            </div>

            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/" style={linkStyle}>Shop</Link> {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("men")}>
                    <Link to="/men" style={linkStyle}>Mens</Link> {menu === "men" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link to="/women" style={linkStyle}>Women</Link> {menu === "women" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids" style={linkStyle}>Kids</Link> {menu === "kids" ? <hr /> : null}
                </li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login' style={linkStyle}><button>Login</button></Link>
                <Link to='/Cart' style={linkStyle}>
                    <div className="nav-cart-wrapper">
                        <img src={cart_icon} alt="cart-icon" />
                        <div className={`nav-cart-count ${animate ? 'pop' : ''}`}>{totalCartItems}</div>
                    </div>
                </Link> 
            </div>
        </div>
    );
};

export default NavBar;
