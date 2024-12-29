
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar   from "./helpers/NavBar";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import CRMPage from './pages/crm';

const App: React.FC = () => {
    return (
        <Router>
            <NavBar /> 
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/services" Component={Services} />
                <Route path="/about-us" Component={AboutUs} />
                <Route path="/crm" Component={CRMPage} />
            </Routes>
        </Router>

);
};

export default App;
