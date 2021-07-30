import NeuTechLogo from './NeuTechLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={NeuTechLogo}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NeuTech Foundation
        </a>
      </header>
    </div>
  );
}

export default App;
