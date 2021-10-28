// import logo from './logo.jpg';
import './App.css';
import Team from './components/Team';
import Home from './components/Home';
import About from './components/About';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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

export default App;
