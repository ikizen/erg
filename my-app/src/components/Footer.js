import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__row1">
                <div className="footer__row1__column">
                    <span>
                        <img src="/about-us.svg" alt="" />
                        About us
                    </span>
                    <div className="footer__row1__column__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet recusandae voluptates rem, magnam at nostrum
                        quas, labore eveniet nesciunt ut vitae sequi! Recusandae
                        quae facere vero. Ipsum nobis maxime incidunt!
                    </div>
                </div>
                <div className="footer__row1__column">
                    <span className="footer__text">
                        <img src="/twitter.svg" alt="" />
                        Follow us
                    </span>
                    <div className="footer__row1__column__text">
                        <img src="/quote.svg" alt="" />
                        Lorem ipsum dolor sit.
                    </div>
                    <div className="footer__row1__column__text">
                        <img src="/quote.svg" alt="" />
                        Lorem ipsum dolor sit.
                    </div>
                </div>
                <div className="footer__row1__column">
                    <span className="footer__text">
                        <img src="/contact-us.svg" alt="" />
                        Contact us
                    </span>
                    <div className="footer__row1__column__text">
                        <img src="/phone1.svg" alt="" />8 700 700 70 70
                    </div>
                    <div className="footer__row1__column__text">
                        <img src="/phone2.svg" alt="" />8 777 777 77 77
                    </div>
                </div>
            </div>
            <div className="footer__row2">
                <Link className="footer__row2__button">About us</Link>
                <Link className="footer__row2__button">Customer service</Link>
                <Link className="footer__row2__button">Site map</Link>
                <Link className="footer__row2__button">Search terms</Link>
                <Link className="footer__row2__button">Advanced search</Link>
                <Link className="footer__row2__button">Contact us</Link>
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
