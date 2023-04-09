import React, { useState } from "react";
// import "./slider.scss";
const photos = [
    "https://via.placeholder.com/800x400/1abc9c/ffffff?text=Photo+1",
    "https://via.placeholder.com/800x400/2ecc71/ffffff?text=Photo+2",
    "https://via.placeholder.com/800x400/3498db/ffffff?text=Photo+3",
    "https://via.placeholder.com/800x400/9b59b6/ffffff?text=Photo+4",
    "https://via.placeholder.com/800x400/e74c3c/ffffff?text=Photo+5",
];

const Slider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    return (
        <div className="slider">
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />

            <button
                onClick={previousImage}
                className="slider__button slider__button--left"
            >
                {"<"}
            </button>
            <button
                onClick={nextImage}
                className="slider__button slider__button--right"
            >
                {">"}
            </button>
        </div>
    );
};

export default Slider;
