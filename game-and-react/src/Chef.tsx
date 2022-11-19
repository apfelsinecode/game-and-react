

import { useEffect, useState } from "react";
import { ChefGameState, leftClick, lift, moveFood, rightClick, unlift } from "./ChefGameState";

/*
 * use emojis:
 * the four foods: 🥩, 🥦, 🥓, 🐟
 * cook/chef: 🧑‍🍳
 * pan: 🍳 (not perfect choice)
 */

type Direction = "up" | "down";


interface ChefProps {
    onExit: () => void;
}

function Chef(props: ChefProps) {
    
    const food = ['🥩', '🥦', '🥓', '🐟']; // food for the pans (defines width)
    const height = 4; // how high the food can be thrown (height above pan)

    const [chefGameState, setChefGameState] = useState(() => new ChefGameState());

    // const [panPosition, setPanPosition] = useState(0);

    // const [panLifted, setPanLifted] = useState(false);

    /*const [foodPos0, setFoodPos0] = useState(0);
    const [foodPos1, setFoodPos1] = useState(3);
    const [foodPos2, setFoodPos2] = useState(1);
    const [foodPos3, setFoodPos3] = useState(2);

    const [foodDir0, setFoodDir0] = useState<Direction>("up");
    const [foodDir1, setFoodDir1] = useState<Direction>("down");
    const [foodDir2, setFoodDir2] = useState<Direction>("up");
    const [foodDir3, setFoodDir3] = useState<Direction>("up");*/

    // Pan Movement //

    const handleLeftClick = () => {
        // setPanPosition(old => Math.max(0, old - 1));
        // setPanLifted(false);
        setChefGameState(c => leftClick(c));
    }

    const handleRightClick = () => {
        // setPanPosition((old) => Math.min(food.length - 1, old + 1));
        // setPanLifted(false);
        setChefGameState(c => {
            console.log("old value", c);
            const newValue = rightClick(c);
            console.log("new value", newValue);
            return rightClick(c);
        });
    }

    const onLift = () => {
        /*if (!panLifted){
            setPanLifted(true);
            setTimeout(() => setPanLifted(false), 250 /*ms* /);
        }*/
        if (!chefGameState.panLifted) {
            setChefGameState(c => lift(c));
            setTimeout(() => setChefGameState(c => unlift(c)), 250 /*ms*/);
        }
    }

    const onMoveFood = () => {
        [0, 1, 2, 3].forEach(i => setChefGameState(c => moveFood(c, i as 0 | 1 | 2 | 3)))

        /*console.log(foodPos0, foodDir0, foodPos2, foodDir2);
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
        }*/

        
        // possible bug: setFoodPos uses old directions, if setFoodPosX depends in foodDirX

    }

    // Food reflection from pan //

    /*useEffect(() => {
        if (foodPos0 === -1 && panPosition === 0 && panLifted) {
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
    }, [foodPos3, panPosition, panLifted]);*/


    // automatic food movement

    const [running, setRunning] = useState(false);

    /*const [requestMove0, setRequestMove0] = useState(false);
    const [requestMove1, setRequestMove1] = useState(false);
    const [requestMove2, setRequestMove2] = useState(false);
    const [requestMove3, setRequestMove3] = useState(false);*/

    /*useEffect(() => {
        if (requestMove0) {
            if (foodPos0 >= height - 1) {
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
            if (foodPos1 >= height - 1) {
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
            if (foodPos2 >= height - 1) {
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
            if (foodPos3 >= height - 1) {
                setFoodDir3("down");
                setFoodPos3(old => old - 1 );
            } else {
                setFoodPos3(old => foodDir3 === "up" ? old + 1 : old - 1);
            }
            setRequestMove3(false);
        }
        // eslint-disable-next-line
    }, [requestMove3]);*/



    const [stepIntervalId, setStepIntervalId] = useState<any>();
    
    useEffect(() => {

        // clearInterval(stepIntervalId);
        console.log("cleared", stepIntervalId);

        if (running) {
            const i = setInterval(() => {
                onMoveFood();
            }, 1000);
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

    // Keyboard controls

    const onKeyDown = (event: KeyboardEvent) => {
        console.log(event);
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

    const indices: (0 | 1 | 2 | 3)[] = [0, 1, 2, 3];

    return (
        <div className="Chef">
            <h1>Game&amp;React: Chef</h1>
            
            <table className="GameTable">
                <tbody>
                    <tr className="DebugRow">
                        {
                            indices.map(i => {
                                return <td key={i}>{chefGameState.foodPos[i]}, {chefGameState.foodDir[i]}</td>
                            })
                        }
                    </tr>
                    {/* <tr className={"DebugRow"}>
                        <td>{foodPos0}, {foodDir0}</td>
                        <td>{foodPos1}, {foodDir1}</td>
                        <td>{foodPos2}, {foodDir2}</td>
                        <td>{foodPos3}, {foodDir3}</td>
                    </tr> */}
                    {Array.from(Array(height).keys()).map(y => (
                        <tr key={y} className="Air">
                            {/* {food.map((elem, x) => (
                                <td key={x} className={foodDirections[x] === "down" ? "rotate" : ""}>
                                    {foodPositions[x] ===  height - 1 - y ? elem: ''}
                                </td>
                            ))} */}
                            {indices.map(i => (
                                <td key={i} className={chefGameState.foodDir[i] === "down" ? "rotate" : ""}>
                                    {chefGameState.foodPos[i] === height - 1 - y ? food[i] : ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        {indices.map(i => (
                            <td key={i}>
                                {chefGameState.panPosition === i && chefGameState.panLifted ? "🍳" : ""}
                            </td>
                        ))}
                    </tr>
                    <FoodRow y={-1} chefGameState={chefGameState} food={food}/>
                    <tr>
                        {indices.map(i => (
                            <td key={i}>
                                {chefGameState.panPosition === i && !chefGameState.panLifted ? "🍳" : ""}
                            </td>
                        ))}
                    </tr>
                    <FoodRow y={-2} chefGameState={chefGameState} food={food}/>
                </tbody>
                
            </table>

            <div className="ControlButtons">
                <button onClick={handleLeftClick}>{"<"}</button>
                <button onClick={handleRightClick}>{">"}</button>
            </div>
            <div className="DebugButtons">
                <button onClick={onLift}>lift</button>
                <button onClick={() => onMoveFood()}>moveFood</button>
                <button onClick={onPlayPause}>{running ? "Pause" : "Play"}</button>
            </div>
            <div className="ExitButton">
                <button onClick={props.onExit}>exit</button>
            </div>
        </div>
    )
}

interface FoodRowProps {
    y: number;
    chefGameState: ChefGameState;
    food: string[];
}

function FoodRow(props: FoodRowProps) {
    const indices: (0 | 1 | 2 | 3)[] = [0, 1, 2, 3];
    const { foodPos, foodDir } = props.chefGameState;
    // const foodPos = props.chefGameState.foodPos;
    // const foodDir = props.chefGameState.foodDir;
    return <tr>{
        indices.map(i => (
            <td key={i} className={foodDir[i] === "down" ? "rotate" : ""}>
                {foodPos[i] === props.y ? props.food[i] : ""}
            </td>        
        ))
    }</tr>
}

export default Chef;