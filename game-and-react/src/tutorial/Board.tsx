import { useState } from 'react';
import './styles.css'

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </>
    );
}


function Square() {

    const [value, setValue] = useState("");

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
    }

    return <button onClick={click} className="Square">{value}</button>

}