import React from 'react';
import { FaFilePdf, FaHome, FaRegEnvelope, FaGithubSquare } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Inicio from "./components/Inicio";
import Contact from "./components/Contact";
import './App.css';
import Cv from './cv.pdf'
import Wave from './img/wave.svg'

function App() {
  return (
    <Router>
      <header className="navbar">
        <NavLink to="/" className="enlaces" activeClassName="active">
            <FaHome /> Home
        </NavLink>
        <NavLink to="/contact" className="enlaces enlace-menu" activeClassName="active-menu">
            <FaRegEnvelope /> Contact Me
        </NavLink>
        <a href={Cv} target="_blank" rel="noopener noreferrer" className="enlaces enlace-menu">
          <FaFilePdf /> CV
        </a>
        <a href="https://github.com/SantiagoMtzOlv" target="_blank" rel="noopener noreferrer" className="enlaces enlace-menu">
          <FaGithubSquare /> My GitHub
        </a>
      </header>
      <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      <footer className="footer">
        <img src={Wave} alt="footer"/>
      </footer>
    </Router>
  );
}

export default App;
