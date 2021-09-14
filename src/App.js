import React from "react";
import "./styles/styles.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (

    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Router>

    </>
  );
}
