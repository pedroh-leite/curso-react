import './App.css';

import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName'
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  // const name = "Sabrina"
  const [userName] = useState("Puff");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ] 

  function showMessage() {
    console.log("Evento no componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="BMW" km={100000} color = "azul" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="branco" newCar={false}/>
      {/* Loop em array de objetos */}
      {cars.map((cars) => (
        <CarDetails 
        key={cars.id}
        brand={cars.brand} 
        color={cars.color} 
        km={cars.km} 
        newCar={cars.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragments propFragment="test" />
      {/* Prop Children */}
      <Container MyValue="test">
        <p>E esse é o conteúdo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction = {showMessage}/>
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
