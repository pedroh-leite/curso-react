import './App.css';

// 1 - Config react routes
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
