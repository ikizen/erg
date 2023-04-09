import Slider from "../Slider";
import ImageCarousel from "../ImageCarousel";
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
import WelcomeBlock from "../WelcomeBlock";
import DiscountBlock from "../DiscountBlock";
import Footer from "../Footer";

function Home() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((response) => {
            const res = response.data.products.slice(11, 13);
            setPhotos(res);
            console.log(res);
        });
    }, []);

    return (
        <>
            <Header />
            <ImageCarousel images={photos} />
            <WelcomeBlock />
            <Slider />
            <DiscountBlock />
            <Footer />
        </>
    );
}

export default Home;
