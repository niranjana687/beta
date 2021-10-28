import React, {Component} from "react";
import '../styles/Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
        <ul className="nav">
        <li className="nav-home"><a href="/">MEC MUNSoC</a></li>
        <li className="nav-item"></li>
        {/* Link to Team
        Link to Impact
        Link to Contact */}
        <li className="nav-item"><a href="/#About">About Us</a></li>
        <li className="nav-item"><a href="/#Impact">Impact</a></li>
        <li className="nav-item"><a href="/#Team">Team</a></li>
        <li className="nav-item"><a href="/#Contact">Contact</a></li>
        </ul>
    </nav>
        );
    }
}

export default Nav;