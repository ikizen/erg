import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Brands from "./components/pages/Brands";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Kid from "./components/pages/Kid";
import Sale from "./components/pages/Sale";
import Login from "./components/Login";
import useToken from "./components/useToken";

function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

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
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
