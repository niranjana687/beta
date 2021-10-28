import React, {Component} from "react";
import Nav from "./Nav";
import "../styles/style.css"

class Home extends Component {
    render() {
        return (
            <div>
            <Nav />
                <img src="/mecmun.png" className="main-pic" alt="MEC MUN 2019"/>
            <div className="main-pic-desc">Empowering<br /> Youth</div>
            </div>
            
        );
    }
}

export default Home;
    
    
