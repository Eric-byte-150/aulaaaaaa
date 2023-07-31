
import './App.css';
import Footer from './Components/Footer';
import Habilidades from './Components/Habilidades';
import Home from './Components/Home';
import NavExemplo from './Components/NavExemplo';


import Projetos from './Components/Projetos';
import Redes from './Components/Redes';
import ScrollButton from './Components/ScrollButoon';
import SobreMim from './Components/SobreMim';


function App() {

  
  return (
    <div className="App">
     <NavExemplo/>
     <Home/>
     <SobreMim/>
     <Habilidades/>
     <Redes/>
     <Projetos/>
     <ScrollButton/>
     <Footer/>
    </div>
  );
}

export default App;
