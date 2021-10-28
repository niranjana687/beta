import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';
import Team from './components/Team';
import Home from './components/Home';
import About from './components/About';
import Impact from './components/Impact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/impact" component={Impact} />
    <Team />
    {/* <Contact /> */}
    <Footer />

    </div>
      </HashRouter>
    );
  }
}

export default App;
