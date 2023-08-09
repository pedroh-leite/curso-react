// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

// Style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
