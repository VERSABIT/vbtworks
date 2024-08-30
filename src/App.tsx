
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar   from "./helpers/NavBar";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar /> 
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/services" Component={Services} />
                <Route path="/about-us" Component={AboutUs} />
            </Routes>
        </Router>

);
};

export default App;
