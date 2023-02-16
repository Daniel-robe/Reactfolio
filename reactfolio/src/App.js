import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
