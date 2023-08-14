import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from 'react';
import Title from './components/Title';

function App() {

    const n = 15;
    const[name] = useState("Pedro");
    const redTitle = false;


  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent/>
      <p>Esse parágrafo é do app.js</p>

      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Esse elemento foi estilizado inline</p>

      {/* CSS Inline dinâmico */}
      <h2 style={n > 15 ? {color: "blue"} : {color: "pink"}}>CSS dinâmico</h2>

      <h2 
      style={name === "Pedro" 
      ? {color: "green", backgroundColor: "black"} 
      : null
      }
      >
        Teste nome
      </h2>

      {/* Classe dinâmica */}
      <h2 
      className={redTitle 
      ? "red-title" 
      : "title"
      }
      >Esse título vai ter classe dinâmica
      </h2>

      {/* CSS Modules */}
      <Title/>
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
