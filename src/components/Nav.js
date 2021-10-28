import React, {Component} from "react";
import '../styles/Nav.css';
import Home from "./Home";
import About from "./About";
import Impact from "./Impact";
import Team from "./Team";
import {Route, NavLink, HashRouter} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
           <HashRouter>
                <nav className="nav">
        <ul className="nav">
        <li className="nav-home"><NavLink to="/">MEC MUNSoC</NavLink></li>
        <li className="nav-item"></li>
        {/* Link to Team
        Link to Impact
        Link to Contact */}
        <li className="nav-item"><NavLink to="/about">About Us</NavLink></li>
        <li className="nav-item"><NavLink to="/impact">Impact</NavLink></li>
        <li className="nav-item">Team</li>
        </ul>
    </nav>
           </HashRouter>
        );
    }
}

export default Nav;