import React from "react";
import '../styles/Nav.css';

export default function Nav() {
    return (
        <nav className="nav">
        <ul className="nav">
        <li className="nav-home">MEC MUNSoC</li>
        <li className="nav-item"></li>
        {/* Link to Team
        Link to Impact
        Link to Contact */}
        <li className="nav-item">About Us</li>
        <li className="nav-item">Impact</li>
        <li className="nav-item">Team</li>
        <li className="nav-item">Contact</li>
        </ul>
    </nav>
    );
}