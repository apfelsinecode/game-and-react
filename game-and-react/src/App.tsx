import React, {useState} from 'react';
import './App.css';
import Chef from './Chef';
import TicTacToe from "./TicTacToe";

type GameName = "Chef" | "TicTacToe" | "null";

function App() {

  const [selection, setSelection] = useState<GameName>("null");
  const games = {
      "Chef": <Chef onExit={() => setSelection("null")}/>,
      "TicTacToe": <TicTacToe/>,
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
    return (
            <ul>
                <li><button onClick={() => props.setSelection("Chef")}>Chef</button></li>
                <li><button onClick={() => props.setSelection("TicTacToe")}>TicTacToe</button></li>
            </ul>
    )
}

export default App;
