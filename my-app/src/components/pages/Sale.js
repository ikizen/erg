import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";

function Sale() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((response) => {
            // console.log(response.data);
            const res = response.data.products.slice(11, 25);
            setCards(res);
            console.log(res);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="card-block">
                {cards.map((card) => (
                    <div key={card.title} className="card-block__card">
                        <img
                            className="card-block__card__img"
                            src={card.images[0]}
                            alt={card.title}
                        />
                        <div className="card-block__card__title">
                            {card.title}
                        </div>
                        <div className="card-block__card__info">
                            <div className="card-block__card__info__price">
                                ${card.price}.00
                            </div>
                            <button className="card-block__card__info__button">
                                Add to Card
                            </button>
                        </div>
                        <div className="card-block__card__wishlist">
                            <img src="/star.svg" alt="" />
                            Add to wishlist
                        </div>
                        <div className="card-block__card__compare">
                            <img src="/document.svg" alt="" />
                            Add to Compare
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Sale;
