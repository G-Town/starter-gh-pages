import './App.css';
import { HashRouter } from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <HashRouter basemname='/starter-ghpages'>
      <div className="App">
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;