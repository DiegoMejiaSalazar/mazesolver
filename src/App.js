import Home from "./containers/home";
import './App.css'
import {ContextProvider} from "./HOC/ContextProvider"

function App() {
  return (
    <div className="App">
        <ContextProvider>
            <Home/>
        </ContextProvider>
    </div>
  );
}

export default App;
