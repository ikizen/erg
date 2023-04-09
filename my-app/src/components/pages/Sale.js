import Header from "../Header";
import axios from "axios";

function Sale() {
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                console.log(response.data); // get the first 5 photos
            });
    }, []);

    return (
        <>
            <Header />
            <div>Sale</div>
        </>
    );
}

export default Sale;
