import './styles.css'

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square value='X'/>
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

interface SquareProps {
    value?: 'X' | 'O'
}

function Square(props: SquareProps) {
    return <button className="Square">{props.value}</button>

}