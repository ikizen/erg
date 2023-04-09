import React from "react";
import "../App.scss";
import "../index.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <button className="button button--my-account">
                    My Account
                </button>
                <button className="button button--wishlist">My Wishlist</button>
                <button className="button button--checkout">Checkout</button>
                <button className="button button--log-in">Log in</button>
            </div>
            <div className="header__middle">
                <a href="/" className="logo">
                    My Company Logo
                </a>
                <form className="search-form">
                    <input
                        type="text"
                        className="search-form__input"
                        placeholder="Search..."
                    />
                    <button type="submit" className="search-form__button">
                        <svg
                            className="search-form__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.71 22.29l-6.16-6.16a9 9 0 1 0-1.41 1.41l6.16 6.16a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM4 9a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
                        </svg>
                    </button>
                </form>
                <a href="/" className="button button--basket">
                    Basket
                </a>
            </div>
            <div className="header__bottom">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/">HOME PAGE</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/brands">BRANDS</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/women">WOMEN'S SHOES</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/men">MEN'S SHOES</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/kid">KID'S SHOES</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/sale">SALE</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
