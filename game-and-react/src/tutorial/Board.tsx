import { useState } from 'react';
import './styles.css'

export default function Board() {

    const [values, setValues] = useState(Array(9).fill(null))

    const handleClick = (i: number) => {
        const valuesCopy = values.slice();
        valuesCopy[i] = 'X';
        setValues(valuesCopy);
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

    /*const click = () => {
        switch (value) {
            case "":
                setValue("X");
                break;
            case "X":
                setValue("O")
                break;
            case "O":
                setValue("")
                break;

        }
    }*/

    return <button onClick={props.onClick} className="Square">{props.value}</button>

}