// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import Changecounter from "../components/Changecounter";

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - Contexto mais complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - Alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando o valor do contexto */}
      <Changecounter />
      {/* 6 - Alterando context complexo */}
      <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home;