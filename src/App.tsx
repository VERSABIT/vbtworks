import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./helpers/NavBar";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import CRMPage from "./pages/crm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <NavBar /> <HomePage />{" "}
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              {" "}
              <NavBar /> <Services />{" "}
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              {" "}
              <NavBar /> <AboutUs />{" "}
            </>
          }
        />
        <Route
          path="/crm"
          element={
            <>
              {" "}
              <NavBar /> <CRMPage />{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
