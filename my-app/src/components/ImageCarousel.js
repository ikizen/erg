import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const nextIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="carousel">
            <button
                className="carousel__button carousel__button--prev"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <div className="carousel__slides">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`carousel__slide ${
                            index === currentIndex
                                ? "carousel__slide--active"
                                : ""
                        }`}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
            <button
                className="carousel__button carousel__button--next"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageCarousel;
