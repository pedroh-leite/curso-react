import './App.css'

// 2 - Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

// 4 - Navegando entre páginas
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
