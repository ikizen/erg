import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__row1">
                <div className="footer__row1__column">
                    <img src="/about-us.svg" alt="" />
                    <span className="footer__text">About us</span>
                </div>
                <div className="footer__row1__column">
                    <i className="fab fa-twitter footer__icon"></i>
                    <span className="footer__text">
                        <a href="#" className="footer__link"></a>
                        <Link className="footer__link">Follow us</Link>
                        <a href="#" className="footer__link">
                            Tweet us
                        </a>
                    </span>
                </div>
                <div className="footer__row1__column">
                    <i className="fas fa-envelope footer__icon"></i>
                    <span className="footer__text">
                        <a href="#" className="footer__link">
                            Contact us
                        </a>
                        <a href="#" className="footer__link">
                            <i className="fas fa-phone-alt"></i> 1-800-123-4567
                        </a>
                        <a href="#" className="footer__link">
                            <i className="fas fa-phone-alt"></i> 1-800-987-6543
                        </a>
                    </span>
                </div>
            </div>
            <div className="footer__row2">
                <Link className="footer__button">About us</Link>
                <Link className="footer__button">Customer service</Link>
                <Link className="footer__button">Site map</Link>
                <Link className="footer__button">Search terms</Link>
                <Link className="footer__button">Advanced search</Link>
                <Link className="footer__button">Contact us</Link>
            </div>
            <div className="footer__row3">
                <span className="footer__row3__text">
                    All rights reserved &copy; 2023
                </span>
                <div className="footer__row3__column">
                    <span>Language:</span>
                    <select>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                    </select>
                </div>
                <div className="footer__row3__column">
                    <span>Currency:</span>
                    <select className="footer__row3__column__select">
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
