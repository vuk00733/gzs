import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projekti from "./components/pages/Projekti";
import Kontakt from "./components/pages/Kontakt";
import Vesti from "./components/pages/Vesti";
import Onama from "./components/pages/Onama";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from  "./components/ScrollToTop"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/onama" component={Onama} />
          <Route path="/projekti" exact component={Projekti} />
          <Route path="/projekti/:id" component={ProjectDetail} />
          <Route path="/vesti" component={Vesti} />
          <Route path="/kontakt" component={Kontakt} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
