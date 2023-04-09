import Slider from "../Slider";
import ImageCarousel from "../ImageCarousel";
import Header from "../Header";

const photos = [
    "/slider.png",
    "https://via.placeholder.com/800x400/2ecc71/ffffff?text=Photo+2",
    "https://via.placeholder.com/800x400/3498db/ffffff?text=Photo+3",
    "https://via.placeholder.com/800x400/9b59b6/ffffff?text=Photo+4",
    "https://via.placeholder.com/800x400/e74c3c/ffffff?text=Photo+5",
];

function Home() {
    return (
        <>
            <Header />
            <Slider images={photos} />
            <ImageCarousel images={photos} />
        </>
    );
}

export default Home;
