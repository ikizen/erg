import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Slider from "./components/Slider";
import ImageCarousel from "./components/ImageCarousel";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Brands from "./components/pages/Brands";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Kid from "./components/pages/Kid";
import Sale from "./components/pages/Sale";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/kid" element={<Kid />} />
                    <Route path="/sale" element={<Sale />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
