import React from "react";
import '../styles/style.css';

export default function About() {
    return (
        <section className="about-us">
            <img src="/mecmun.png" className="main-pic" alt="MEC MUN 2019"/>
            <div className="main-pic-desc">Empowering<br /> Youth</div>
            <h3 align="center">ABOUT US</h3>
            <img src="/logo.jpg" className="logo" alt="logo" />
            <p className="about-us-desc"> Founded in 2019, MEC MUN Society is one of the youngest clubs in MEC and the first of its kind in the state of Kerala.
            MEC MUNSoc aims at the holistic development of students not just in MEC, but across the nation to grow into responsible social citizens.
            The club was founded as a project under Millennium Fellowship by the United Nations Academic Impact.
            Founded in 2019, MEC MUN Society is one of the youngest clubs in MEC and the first of its kind in the state of Kerala.
            MEC MUNSoc aims at the holistic development of students not just in MEC, but across the nation to grow into responsible social citizens.
            The club was founded as a project under Millennium Fellowship by the United Nations Academic Impact.
            </p>
        </section>
    );
}