import React, { useState, useEffect } from "react";
import axios from "axios";

function Slider() {
    const [photos, setPhotos] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((response) => {
            // console.log(response.data);
            const res = response.data.products.slice(0, 10);
            setPhotos(res);
            console.log(res);
        });
    }, []);

    const handlePrevClick = () => {
        setStartIndex(startIndex - 5);
    };

    const handleNextClick = () => {
        setStartIndex(startIndex + 5);
    };

    return (
        <div>
            <div className="slider">
                {startIndex > 0 && (
                    <button
                        className="slider__button slider__button--prev"
                        onClick={handlePrevClick}
                    >
                        ❮
                    </button>
                )}
                <div className="slider__photos">
                    {photos.slice(startIndex, startIndex + 5).map((photo) => (
                        <img
                            key={photo.title}
                            src={photo.images[0]}
                            alt={photo.title}
                        />
                    ))}
                </div>
                {startIndex < photos.length - 5 && (
                    <button
                        className="slider__button slider__button--next"
                        onClick={handleNextClick}
                    >
                        ❯
                    </button>
                )}
            </div>
        </div>
    );
}

export default Slider;
