import React from "react";

const DiscountBlock = () => {
    return (
        <div className="discount-block">
            <div className="discount-block__column">
                <div className="discount-block__item">
                    <img
                        src="money.png"
                        alt="Money"
                        className="discount-block__image"
                    />
                    <div className="discount-block__text">
                        Get $25 back after your first purchase
                    </div>
                </div>
            </div>
            <div className="discount-block__column">
                <div className="discount-block__item">
                    <img
                        src="shoes.png"
                        alt="Shoes"
                        className="discount-block__image"
                    />
                    <div className="discount-block__text">
                        Browse our moving catalog
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountBlock;
