import React from "react";
import "../App.scss";
import "../index.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="button button--my-account">
                    <img src="/my-account.svg" alt="" />
                    My Account
                </div>
                <div className="button button--wishlist">
                    <img src="/wishlist.svg" alt="" />
                    My Wishlist
                </div>
                <div className="button button--checkout">
                    <img src="/checkout.svg" alt="" />
                    Checkout
                </div>
                <div>
                    <Link className="button button--log-in" to="/login">
                        <img src="/log-in.svg" alt="" />
                        Log in
                    </Link>
                </div>
            </div>
            <div className="header__middle">
                <Link to="/">
                    <img className="logo" src="/logo.png" alt="" />
                </Link>
                <div className="header__middle__right">
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
                    <Link to="/" className="button--basket">
                        <img src="/checkout.svg" alt="" />
                        My Card
                    </Link>
                </div>
            </div>
            <div className="header__bottom">
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <Link to="/" className="nav__link">
                                HOME PAGE
                            </Link>
                        </li>
                        <li>
                            <Link to="/brands" className="nav__link">
                                BRANDS
                            </Link>
                        </li>
                        <li>
                            <Link to="/women" className="nav__link">
                                WOMEN'S SHOES
                            </Link>
                        </li>
                        <li>
                            <Link to="/men" className="nav__link">
                                MEN'S SHOES
                            </Link>
                        </li>
                        <li>
                            <Link to="/kid" className="nav__link">
                                KID'S SHOES
                            </Link>
                        </li>
                        <li>
                            <Link to="/sale" className="nav__link">
                                SALE
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
