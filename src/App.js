import React, {Component} from 'react';
import './styles/style.css';
import './App.css';
import Team from './components/Team';
import Home from './components/Home';
import About from './components/About';
import Impact from './components/Impact';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Home />
            <About />
            <Impact />
           <Team />
    {/* <Contact /> */}
          <Footer />

        </div>
      
    );
  }
}

export default App;
