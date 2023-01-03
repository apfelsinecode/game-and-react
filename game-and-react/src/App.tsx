import React, {useState} from 'react';
import './App.css';
import Chef from './Chef';
import TicTacToe from "./TicTacToe/TicTacToe";
import Board from './tutorial/Board';

type GameName = "Chef" | "TicTacToe" | "TTTTutorial" | "null";

function App() {

  const [selection, setSelection] = useState<GameName>("null");
  const games = {
      "Chef": <Chef onExit={() => setSelection("null")}/>,
      "TicTacToe": <TicTacToe/>,
      "TTTTutorial": <TTTTutorial/>,
      "null": <Menu setSelection={setSelection}/>,
  }
  return (
    <div className="App">
      {games[selection]}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

interface MenuProps {
    setSelection: (selection: GameName) => void;
}

function Menu(props: MenuProps) {
  const [counter, setCounter] = useState(0);
    return (
      <>
            <ul>
                <li><button onClick={() => props.setSelection("Chef")}>Chef</button></li>
                <li><button onClick={() => props.setSelection("TicTacToe")}>TicTacToe</button></li>
                <li><button onClick={() => props.setSelection("TTTTutorial")}>TicTacToe Tutorial Version</button></li>
            </ul>
            <div>
              Counter: {counter} <br/>
              <button onClick={() => {setCounter(counter - 1)}}>-</button><button onClick={() => {setCounter(counter + 1)}}>+</button>
            </div>
      </>
    )
}

function TTTTutorial() {
  return <div>TicTacToe Tutorial Edition<br/>
    <Board/>
  </div>
}

export default App;
