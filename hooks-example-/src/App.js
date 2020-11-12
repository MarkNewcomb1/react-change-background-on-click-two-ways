import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [color, setColor] = useState('');

  const changeColor = () => {
    setColor('cornflowerblue');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{height:'150px', backgroundColor: color}}></div>
      <button onClick={() => changeColor()}>CLICK TO CHANGE COLOR</button>
    </div>
  );
}

export default App;
