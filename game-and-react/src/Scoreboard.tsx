import { useEffect, useState } from "react";


interface ScoreboardEntry {
    name: string;
    score: number;
}

function Scoreboard() {

    const [scoreEntries, setScoreEntries] = useState<ScoreboardEntry[]>([
        {
            name: "test-name",
            score: 3,
        }
    ])

    function loadScoreboard() {
        const url = "http://localhost:5000/api/game-and-react"
        fetch(url)
            .then((response) => {
                console.log("got response", response);
                return response.json();
            })
            .then((data) => {
                console.log("data", data);
                setScoreEntries(data["scores"]);
            })
    }
    
    useEffect(() => loadScoreboard(), []);

    return (
        <div>
            Scoreboard:
            <table>
                <thead>
                    <th>Name</th>
                    <th>Score</th>
                </thead>
                <tbody>
                {
                    scoreEntries.map((item, index) => 
                        <tr key={index}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.score}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Scoreboard;
