import { useState } from "react"

type Token = 'O' | 'X' | null;
type Position = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

function TicTacToe() {
    
    const [t00, setT00] = useState<Token>(null);
    const [t01, setT01] = useState<Token>(null);
    const [t02, setT02] = useState<Token>(null);
    const [t10, setT10] = useState<Token>(null);
    const [t11, setT11] = useState<Token>(null);
    const [t12, setT12] = useState<Token>(null);
    const [t20, setT20] = useState<Token>(null);
    const [t21, setT21] = useState<Token>(null);
    const [t22, setT22] = useState<Token>(null);

    const [tokens, setTokens] = useState<Record<Position, Token>>({
        0: null, 1: null, 2: null,
        3: null, 4: null, 5: null,
        6: null, 7: null, 8: null,
    });

    const [currentPlayer, setCurrentPlayer] = useState<'O' | 'X'>('O');

    return (
            <div>
                <h1>TicTacToe</h1>
                <table>
                    <tbody>
                        <Row t0={t00} t1={t10} t2={t20}/>
                        <Row t0={t01} t1={t11} t2={t21}/>
                        <Row t0={t02} t1={t12} t2={t22}/>
                    </tbody>
                </table>
            </div>
    )

}

function placeToken(tokens: Record<Position, Token>, position: Position, tile: Token): Record<Position, Token> {
    return {...tokens, [position]: tile}
}


interface RowProps {
    t0: Token;
    t1: Token;
    t2: Token;
}
function Row(props: RowProps) {
    return <tr>
        <td><Tile token={props.t0} onClick={() => console.log("click")}/></td>
        <td><Tile token={props.t1} onClick={() => console.log("click")}/></td>
        <td><Tile token={props.t2} onClick={() => console.log("click")}/></td>
    </tr>
}

interface TileProps {
    token: Token;
    onClick: () => void;
}

function Tile(props: TileProps) {
    return (
        <span onClick={props.onClick}>Tile: {props.token}</span>
    )
}

export default TicTacToe;