import React from "react";
import "../styles/style.css";

export default function Footer() {
    return (
        <div className="footer">
            <footer>
            <img className="footer-logo" src="/logoWhite.png" alt="munsoc logo" />
            <img className="social-icons" src="/twitter.svg" alt="twitter" />
            <img className="social-icons" src="/instagram.svg" alt="instagram" />
            <img className="social-icons" src="/linkedin.svg" alt="linkedin" />
            <img className="social-icons" src="/facebook.svg" alt="facebook" />
            <img className="social-icons-disc" src="/discord.svg" alt="twitter" />Join our Discord Community
            <img className="social-icons-med" src="/medium.svg" alt="twitter" /> Stay informed with MUNner's Daily
            <div className="copyright">© MEC MUNSoC 2021</div>
            
        </footer>
        </div>
    );
}
