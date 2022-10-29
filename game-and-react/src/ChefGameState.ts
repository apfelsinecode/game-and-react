
export type Direction = "up" | "down";
export class ChefGameState {

    food = ['🥩', '🥦', '🥓', '🐟'];
    height = 4;

    foodPos = {
        0: 0,
        1: 3,
        2: 1,
        3: 2,
    }
    
    panLifted: boolean = false;
    panPosition: number = 0;

    foodDir = {
        0: "up",
        1: "down",
        2: "up",
        3: "up",
    }


}

export function leftClick(c: ChefGameState): ChefGameState {
    return {...c, panPosition: Math.max(0, c.panPosition - 1), panLifted: false};
}

export function rightClick(c: ChefGameState): ChefGameState {
    const result = {...c, panPosition: Math.min(c.food.length - 1, c.panPosition + 1), panLifted: false};
    console.log("this", c);
    console.log("copy", result);
    console.log(c.food.length - 1, c.panPosition + 1)
    return result;
}

export function lift(c: ChefGameState): ChefGameState {
    return {...c, panLifted: true};
}

export function unlift(c: ChefGameState): ChefGameState {
    // return Object.assign({}, this, {panLifted: false})
    return {...c, panLifted: false};
}

/*stepFood0(): ChefGameState {
    // if (this.foodDir0)
    if (this.foodPos0 === this.height || (this.foodPos0 === this.height - 1 && Math.random() > 0.5)) {
        return {...this, foodDir0: "down", foodPos0: this.foodPos0 - 1};
    } else {
        return {...this, foodPos0: (this.foodDir0 === "down" ? this.foodPos0 - 1 : this.foodPos0 + 1)};
    }
}*/

export function moveFood(c: ChefGameState, index: 0 | 1 | 2 | 3): ChefGameState {
    if (c.foodPos[index] === c.height || (c.foodPos[index] === c.height - 1 && Math.random() > 0.5)) {
        return {
            ...c,
            foodDir: {
                ...c.foodDir,
                [index]: "down"
            },
        };
    } else {
        return {
            ...c,
            foodPos: {
                ...c.foodPos,
                [index]: c.foodDir[index] === "down" ? c.foodPos[index] - 1 : c.foodDir[index] + 1
            },
        };
    }
}

export function reflect(c: ChefGameState): ChefGameState {

    let newFoodDir = {}
    let newFoodPos = {}
    for (let i in [0, 1, 2, 3]) {
        if (c.foodPos[i] === -1 && c.panPositon === 1 && c.panLifted) {
            newFoodPos[i] = "up";
            newFoodDir[i] = 0;
        }
        newFoodDir[i] =  ? "up" : c.foodDir[i];

    }
    return {
        ...c,
        foodDir: {
            0: (c.foodDir[0]),
        }
    }
    // TODO
}