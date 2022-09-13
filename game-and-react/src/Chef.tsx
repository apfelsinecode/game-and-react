
/*interface ChefProps {

}*/

import { useEffect, useState } from "react";

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

    const [running, setRunning] = useState(false);

    const handleLeftClick = () => {
        setPanPosition(Math.max(0, panPosition - 1));
    }

    const handleRightClick = () => {
        setPanPosition(Math.min(food.length - 1, panPosition + 1));
    }

    const moveFood = () => {
        console.log(foodPos0, foodDir0, foodPos2, foodDir2);
        if (foodPos0 >= height - 1) {
            setFoodDir0("down");
            setFoodPos0(old => old - 1 );
        } else {
            setFoodPos0(old => foodDir0 === "up" ? old + 1 : old - 1);
        }
        if (foodPos1 >= height - 1) {
            setFoodDir1("down");
            setFoodPos1(old => old - 1);
        } else {
            setFoodPos1(old => foodDir1 === "up" ? old + 1 : old - 1);
        }
        if (foodPos2 >= height - 1) {
            setFoodDir2("down");
            setFoodPos2(old => old - 1);
        } else {
            setFoodPos2(old => foodDir2 === "up" ? old + 1 : old - 1);
        }
        if (foodPos3 >= height - 1) {
            setFoodDir3("down");
            setFoodPos3(old => old - 1);
        } else {
            setFoodPos3(old => foodDir3 === "up" ? old + 1 : old - 1);
        }

        
        // possible bug: setFoodPos uses old directions, if setFoodPosX depends in foodDirX

    }

    useEffect(() => {
        if (foodPos0 === -1 && panPosition === 0 && panLifted) {
            console.log("foodPos0 === 0 && panPosition === 0 && panLifted");
            setFoodDir0("up");
            setFoodPos0(0);
        }
    }, [foodPos0, panPosition, panLifted]);

    useEffect(() => {
        if (foodPos1 === -1 && panPosition === 1 && panLifted) {
            setFoodDir1("up");
            setFoodPos1(0);
        }
    }, [foodPos1, panPosition, panLifted]);

    useEffect(() => {
        if (foodPos2 === -1 && panPosition === 2 && panLifted) {
            setFoodDir2("up");
            setFoodPos2(0);
        }
    }, [foodPos2, panPosition, panLifted]);

    useEffect(() => {
        if (foodPos3 === -1 && panPosition === 3 && panLifted) {
            setFoodDir3("up");
            setFoodPos3(0);
        }
    }, [foodPos3, panPosition, panLifted]);


    const onLift = () => {
        if (!panLifted){
            setPanLifted(true);
            setTimeout(() => setPanLifted(false), 500 /*ms*/);
        }
    }

    const step = () => {
        console.log("move");
        moveFood();
    }

    const [stepIntervalId, setStepIntervalId] = useState<any>();
    
    useEffect(() => {
        /*async function sleep(time: number) {
            return new Promise(resolve => setTimeout(resolve, time));
        }*/
        clearInterval(stepIntervalId);
        if (running) {
            const i = setInterval(() => step(), 1000);
            // not working: step function is old and uses old position and direction states
            setStepIntervalId(i);
            return () => {
                clearInterval(i);
            }
        }

        
    }, [running]);

    const onPlayPause = () => {
        if (running) {
            // now pause
            setRunning(false);
        } else {
            setRunning(true);
        }
    }

    return (
        <div className="Chef">
            <h1>Game&amp;React: Chef</h1>
            
            <table className="GameTable">
                <tbody>
                    <tr className={"DebugRow"}>
                        <td>{foodPos0}, {foodDir0}</td>
                        <td>{foodPos1}, {foodDir1}</td>
                        <td>{foodPos2}, {foodDir2}</td>
                        <td>{foodPos3}, {foodDir3}</td>
                    </tr>
                    {Array.from(Array(height).keys()).map(y => (
                        <tr key={y} className="Air">
                            {/* {food.map((elem, x) => (
                                <td key={x} className={foodDirections[x] === "down" ? "rotate" : ""}>
                                    {foodPositions[x] ===  height - 1 - y ? elem: ''}
                                </td>
                            ))} */}
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
                    <tr>
                        {food.map((elem, index) => (
                            <td key={index}>{panPosition === index && panLifted ? "🍳" : ""}</td>
                        ))}
                    </tr>
                    <tr>
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
                    <tr>
                        {food.map((elem, index) => (
                            <td key={index}>{panPosition === index && !panLifted ? "🍳" : ""}</td>
                        ))}
                    </tr>
                    <tr>
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
                <button onClick={handleLeftClick}>{"<"}</button>
                <button onClick={handleRightClick}>{">"}</button>
            </div>
            <div className="DebugButtons">
                <button onClick={onLift}>lift</button>
                <button onClick={() => moveFood()}>moveFood</button>
                <button onClick={() => setRunning(old => !old)}>{running ? "Pause" : "Play"}</button>
            </div>
        </div>
    )
}

export default Chef;