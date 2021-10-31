import React from "react";
import '../styles/Nav.css';
import Home from "./Home";
import About from "./About";
import Impact from "./Impact";
import Team from "./Team";



export default function Nav() {
    return ( 
        <nav className="nav">
        <ul className="nav">
        
        <li className="nav-home"><a href="/#">MEC MUNSoC</a></li>
        <li className="nav-item"></li>
        {/* a href Team
        a href Impact
        a href Contact */}
        <li className="nav-item"><a href="/#about">About Us</a></li>
        <li className="nav-item"><a href="/#impact">Impact</a></li>
        
        <li className="nav-item"><a href="/team">Team</a></li>
        </ul>
    </nav>
    ); 
};