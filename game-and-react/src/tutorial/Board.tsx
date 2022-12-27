import { useState } from 'react';
import './styles.css'

export default function Board() {

    const [values, setValues] = useState(Array(9).fill(""))

    return (
        <>
            <div className="board-row">
                <Square value={values[0]}/>
                <Square value={values[1]}/>
                <Square value={values[2]}/>
            </div>
            <div className="board-row">
                <Square value={values[3]}/>
                <Square value={values[4]}/>
                <Square value={values[5]}/>
            </div>
            <div className="board-row">
                <Square value={values[6]}/>
                <Square value={values[7]}/>
                <Square value={values[8]}/>
            </div>
        </>
    );
}

interface SquareProps{
    value: "X" | "O" | ""
}

function Square(props: SquareProps) {

    /*const [value, setValue] = useState("");

    const click = () => {
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

    return <button className="Square">{props.value}</button>

}