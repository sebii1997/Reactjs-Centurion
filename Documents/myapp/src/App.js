import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carusel from './components/Carusel/Carusel';
import Card from './components/Card/Card';



function App() {
  return (
    <div className="App">
      <Carusel/>      
      <Navbar/>      
      <Card
      titulo={"Mouse logitech 230"}
      descripcion={"Mouse con toda la tecnologia al dia adaptado para el gaming y para que puedas sentir esa comodidad al jugar tus videojuegos favoritos"}
      img={"https://mexx-img-2019.s3.amazonaws.com/mouse-logitech-gamer-rgb-lila_38560_5.jpeg?v187"}
      btnText={"Comprar"}
      />
    </div>
  );
}

export default App;
