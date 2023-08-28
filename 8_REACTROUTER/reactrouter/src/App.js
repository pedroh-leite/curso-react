import './App.css';

// 1 - Config react routes
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
