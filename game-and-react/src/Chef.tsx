
/*interface ChefProps {

}*/

import { useEffect, useState } from "react";
import SubmitScore from "./SubmitScore";

/*
 * use emojis:
 * the four foods: 🥩, 🥦, 🥓, 🐟
 * cook/chef: 🧑‍🍳
 * pan: 🍳 (not perfect choice)
 */

type Direction = "up" | "down";

function Chef(/*props: ChefProps*/) {
    
    const food = ['🥩', '🥦', '🥓', '🐟']; // food for the pans (defines width)
    const height = 4; // how high the food can be thrown (height above pan)

    const [points, setPoints] = useState(0);

    const [panPosition, setPanPosition] = useState(0);

    const [panLifted, setPanLifted] = useState(false);

    // const [foodPositions, setFoodPositions] = useState([0, 3, 1, 2]);
    // const [foodDirections, setFoodDirections] = useState<Direction[]>(["up", "down", "up", "up"])

    const [foodPos0, setFoodPos0] = useState(0);
    const [foodPos1, setFoodPos1] = useState(3);
    const [foodPos2, setFoodPos2] = useState(1);
    const [foodPos3, setFoodPos3] = useState(2);

    const [foodDir0, setFoodDir0] = useState<Direction>("up");
    const [foodDir1, setFoodDir1] = useState<Direction>("down");
    const [foodDir2, setFoodDir2] = useState<Direction>("up");
    const [foodDir3, setFoodDir3] = useState<Direction>("up");

    const [gameEnded, setGameEnded] = useState(false);  // the game was lost and a new one should be startet when pressing play

    // initialize the game //
    const initGame = () => {
        setPoints(0);

        setFoodPos0(0);
        setFoodPos1(3);
        setFoodPos2(1);
        setFoodPos3(2);
        
        setFoodDir0("up");
        setFoodDir1("down");
        setFoodDir2("up");
        setFoodDir3("up");
    }

    // Pan Movement //

    const handleLeftClick = () => {
        setPanPosition(old => Math.max(0, old - 1));
        setPanLifted(false);
    }

    const handleRightClick = () => {
        setPanPosition((old) => Math.min(food.length - 1, old + 1));
        setPanLifted(false);
    }

    const onLift = () => {
        if (!panLifted){
            setPanLifted(true);
            setTimeout(() => setPanLifted(false), 250 /*ms*/);
        }
    }


    // Food reflection from pan //

    useEffect(() => {
        if (foodPos0 === -1 && panPosition === 0 && panLifted) {
            setFoodDir0("up");
            setFoodPos0(0);
            setPoints(old => old + 1);
        }
    }, [foodPos0, panPosition, panLifted]);

    useEffect(() => {
        if (foodPos1 === -1 && panPosition === 1 && panLifted) {
            setFoodDir1("up");
            setFoodPos1(0);
            setPoints(old => old + 1);
        }
    }, [foodPos1, panPosition, panLifted]);

    useEffect(() => {
        if (foodPos2 === -1 && panPosition === 2 && panLifted) {
            setFoodDir2("up");
            setFoodPos2(0);
            setPoints(old => old + 1);
        }
    }, [foodPos2, panPosition, panLifted]);

    useEffect(() => {
        if (foodPos3 === -1 && panPosition === 3 && panLifted) {
            setFoodDir3("up");
            setFoodPos3(0);
            setPoints(old => old + 1);
        }
    }, [foodPos3, panPosition, panLifted]);

    // losing the game //

    useEffect(() => {
        if (foodPos0 < -1 || foodPos1 < -1 || foodPos2 < -1 || foodPos3 < -1) {
            setRunning(false);
            setGameEnded(true);
        }
    }, [foodPos0, foodPos1, foodPos2, foodPos3])

    // automatic food movement //

    const [running, setRunning] = useState(false);

    const [requestMove0, setRequestMove0] = useState(false);
    const [requestMove1, setRequestMove1] = useState(false);
    const [requestMove2, setRequestMove2] = useState(false);
    const [requestMove3, setRequestMove3] = useState(false);

    useEffect(() => {
        if (requestMove0) {
            if (foodPos0 >= height - 1 - Math.random()) {
                setFoodDir0("down");
                setFoodPos0(old => old - 1 );
            } else {
                setFoodPos0(old => foodDir0 === "up" ? old + 1 : old - 1);
            }
            setRequestMove0(false);
        }
        // eslint-disable-next-line
    }, [requestMove0]);

    useEffect(() => {
        if (requestMove1) {
            if (foodPos1 >= height - 1 - (Math.random() * 2)) {
                setFoodDir1("down");
                setFoodPos1(old => old - 1 );
            } else {
                setFoodPos1(old => foodDir1 === "up" ? old + 1 : old - 1);
            }
            setRequestMove1(false);
        }
        // eslint-disable-next-line
    }, [requestMove1]);

    useEffect(() => {
        if (requestMove2) {
            if (foodPos2 >= height - 1 - (Math.random() * 2)) {
                setFoodDir2("down");
                setFoodPos2(old => old - 1 );
            } else {
                setFoodPos2(old => foodDir2 === "up" ? old + 1 : old - 1);
            }
            setRequestMove2(false);
        }
        // eslint-disable-next-line
    }, [requestMove2]);

    useEffect(() => {
        if (requestMove3) {
            if (foodPos3 >= height - 1 - Math.random()) {
                setFoodDir3("down");
                setFoodPos3(old => old - 1 );
            } else {
                setFoodPos3(old => foodDir3 === "up" ? old + 1 : old - 1);
            }
            setRequestMove3(false);
        }
        // eslint-disable-next-line
    }, [requestMove3]);



    const [stepIntervalId, setStepIntervalId] = useState<any>();
    
    useEffect(() => {

        // clearInterval(stepIntervalId);
        console.log("cleared", stepIntervalId);

        if (running) {
            const i = setInterval(() => {
                setRequestMove0(true);
                setRequestMove1(true);
                setRequestMove2(true);
                setRequestMove3(true);
            }, 1000);
            setStepIntervalId(i);
            return () => {
                clearInterval(i);
            }
        }

        
    }, [running]);

    const onPlayPause = () => {
        if (gameEnded) {
            initGame();
        }
        if (running) {
            // now pause
            setRunning(false);
        } else {
            setRunning(true);
        }
    }

    // Keyboard controls

    const onKeyDown = (event: KeyboardEvent) => {
        switch (event.code) {
            case "ArrowLeft":
            case "KeyA":
            case "KeyJ":
            case "Numpad4":
                handleLeftClick();
                break;
            case "ArrowRight":
            case "KeyD":
            case "KeyL":
            case "Numpad6":
                handleRightClick();
                break;
            case "Space":
            case "ArrowUp":
            case "KeyW":
            case "KeyI":
            case "Numpad8":
                onLift();
                break;
            case "Escape":
                onPlayPause();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log("add", onKeyDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            console.log("remove", onKeyDown);
            document.removeEventListener("keydown", onKeyDown)
        }
    }, []);

    return (
        <div className="Chef">
            <h1>Game&amp;React: Chef</h1>
            <div className="HintLine">
                <span>(control with arrow keys / WASD if available, Esc to pause and unpause)</span>
            </div>
            <table className="GameTable">
                <tbody>
                   
                    {Array.from(Array(height).keys()).map(y => (
                        <tr key={y} className="Air">
                            
                            <td className={foodDir0 === "down" ? "rotate" : ""}>
                                {foodPos0 === height - 1 - y ? food[0] : ""}
                            </td>
                            <td className={foodDir1 === "down" ? "rotate" : ""}>
                                {foodPos1 === height - 1 - y ? food[1] : ""}
                            </td>
                            <td className={foodDir2 === "down" ? "rotate" : ""}>
                                {foodPos2 === height - 1 - y ? food[2] : ""}
                            </td>
                            <td className={foodDir3 === "down" ? "rotate" : ""}>
                                {foodPos3 === height - 1 - y ? food[3] : ""}
                            </td>
                        </tr>
                    ))}
                    <tr className="Air">
                        {food.map((elem, index) => (
                            <td key={index}>{panPosition === index && panLifted ? "🍳" : ""}</td>
                        ))}
                    </tr>
                    <tr className="Air">
                        <td className={foodDir0 === "down" ? "rotate" : ""}>
                                {foodPos0 === -1 ? food[0] : ""}
                            </td>
                            <td className={foodDir1 === "down" ? "rotate" : ""}>
                                {foodPos1 === -1 ? food[1] : ""}
                            </td>
                            <td className={foodDir2 === "down" ? "rotate" : ""}>
                                {foodPos2 === -1 ? food[2] : ""}
                            </td>
                            <td className={foodDir3 === "down" ? "rotate" : ""}>
                                {foodPos3 === -1 ? food[3] : ""}
                            </td>
                    </tr>
                    <tr className="Air">
                        {food.map((elem, index) => (
                            <td key={index}>{panPosition === index && !panLifted ? "🍳" : ""}</td>
                        ))}
                    </tr>
                    <tr className="Air">
                        <td className={foodDir0 === "down" ? "rotate" : ""}>
                                {foodPos0 === -2 ? food[0] : ""}
                            </td>
                            <td className={foodDir1 === "down" ? "rotate" : ""}>
                                {foodPos1 === -2 ? food[1] : ""}
                            </td>
                            <td className={foodDir2 === "down" ? "rotate" : ""}>
                                {foodPos2 === -2 ? food[2] : ""}
                            </td>
                            <td className={foodDir3 === "down" ? "rotate" : ""}>
                                {foodPos3 === -2 ? food[3] : ""}
                            </td>
                    </tr>
                </tbody>
                
            </table>

            <div className="ControlButtons">
                <button onClick={onLift}>{"▲"}</button><br/>
                <button onClick={handleLeftClick}>{"◀"}</button>
                <button onClick={handleRightClick}>{"▶"}</button>
            </div>
            <div className="DebugButtons">
                
                <button onClick={onPlayPause}>{running ? "Pause" : "Play"}</button>
            </div>
            <div className="PointsDisplay">
                <span>Points: {points}</span>
            </div>
            <div className="VersionDisplay">
                <span>v0.2.0</span>
            </div>

            {gameEnded ? <SubmitScore/> : null}

        </div>
    )
}

export default Chef;