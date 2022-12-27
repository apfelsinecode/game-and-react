import { useState } from 'react';
import './styles.css'

export default function Board() {

    const [values, setValues] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i: number) => {
        if (!values[i]) {
            const valuesCopy = values.slice();
            valuesCopy[i] = xIsNext ? 'X' : 'O';
            setValues(valuesCopy);
            setXIsNext((oldValue) => {
                return !oldValue
            })
        }
        
    }

    return (
        <>
            <div className="board-row">
                <Square value={values[0]} onClick={() => handleClick(0)}/>
                <Square value={values[1]} onClick={() => handleClick(1)}/>
                <Square value={values[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={values[3]} onClick={() => handleClick(3)}/>
                <Square value={values[4]} onClick={() => handleClick(4)}/>
                <Square value={values[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={values[6]} onClick={() => handleClick(6)}/>
                <Square value={values[7]} onClick={() => handleClick(7)}/>
                <Square value={values[8]} onClick={() => handleClick(8)}/>
            </div>
        </>
    );
}

interface SquareProps{
    value: "X" | "O" | null;
    onClick?: () => void;
}

function Square(props: SquareProps) {

    return <button onClick={props.onClick} className="Square">{props.value}</button>

}

function calculateWinner(squares: Array<'X' | 'O' | null>): 'X' | 'O' | null {
    const lines = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4 ,6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}