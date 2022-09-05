
/*interface ChefProps {

}*/

import { useState } from "react";

/*
 * use emojis:
 * the four foods: 🥩, 🥦, 🥓, 🐟
 * cook/chef: 🧑‍🍳
 * pan: 🍳 (not perfect choice)
 */

function Chef(/*props: ChefProps*/) {
    
    const food = ['🥩', '🥦', '🥓', '🐟']; // food for the pans (wdefines idth)
    const height = 4; // how high the food can be thrown (height above pan)

    const [panPosition, setPanPosition] = useState(0);

    const handleLeftClick = () => {
        setPanPosition(Math.max(0, panPosition - 1));
    }

    const handleRightClick = () => {
        setPanPosition(Math.min(food.length - 1, panPosition + 1));
    }

    return (
        <div className="Chef">
            <h1>Game&amp;React: Chef</h1>
            
            <table className="GameTable">
                <tbody>
                    {Array.from(Array(height).keys()).map(i => (
                        <tr key={i} className="Air">
                            {food.map((elem, index) => (
                                <td key={index}>{elem}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        {food.map((elem, index) => (
                            <td>🍳</td>
                        ))}
                    </tr>
                    <tr>
                        {food.map((elem, index) => (
                            <td key={index}>{elem}</td>
                        ))}
                    </tr>
                    <tr>
                        {food.map((elem, index) => (
                            <td>{panPosition === index ? "🍳" : ""}</td>
                        ))}
                    </tr>
                    <tr>
                        {food.map((elem, index) => (
                            <td key={index}>{elem}</td>
                        ))}
                    </tr>
                </tbody>
                
            </table>

            <div className="ControlButtons">
                <button onClick={handleLeftClick}>{"<"}</button>
                <button onClick={handleRightClick}>{">"}</button>
            </div>
        </div>
    )
}

export default Chef;