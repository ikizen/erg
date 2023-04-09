import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Carousel.scss";

const Carousel = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                setPhotos(response.data.slice(0, 5));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === photos.length - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? photos.length - 1 : currentSlide - 1
        );
    };

    return (
        <div className="carousel">
            <div className="carousel__slider">
                {photos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className={
                            index === currentSlide
                                ? "carousel__slide carousel__slide--active"
                                : "carousel__slide"
                        }
                    >
                        <img
                            className="carousel__image"
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                        />
                        <div className="carousel__title">{photo.title}</div>
                    </div>
                ))}
            </div>
            <button
                className="carousel__button carousel__button--left"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="carousel__button carousel__button--right"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
