
/*interface ChefProps {

}*/

/*
 * use emojis:
 * the four foods: 🥩, 🥦, 🥓, 🐟
 * cook/chef: 🧑‍🍳
 * pan: 🍳 (not perfect choice)
 */

function Chef(/*props: ChefProps*/) {
    
    const food = ['🥩', '🥦', '🥓', '🐟']; // food for the pans (wdefines idth)
    const height = 4; // how high the food can be thrown (height above pan)

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
                            <td>🍳</td>
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
                <button>{"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    )
}

export default Chef;