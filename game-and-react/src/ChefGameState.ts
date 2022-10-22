
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

    leftClick: () => ChefGameState = () => {
        return {...this, panPosition: Math.max(0, this.panPosition - 1), panLifted: false};
    }

    rightClick: () => ChefGameState = () => {
        const result = {...this, panPosition: Math.min(this.food.length - 1, this.panPosition + 1), panLifted: false};
        console.log("this", this);
        console.log("copy", result);
        console.log(this.food.length - 1, this.panPosition + 1)
        return result;
    }

    lift: () => ChefGameState = () => {
        return {...this, panLifted: true};
    }

    unlift: () => ChefGameState = () => {
        // return Object.assign({}, this, {panLifted: false})
        return {...this, panLifted: false};
    }

    /*stepFood0(): ChefGameState {
        // if (this.foodDir0)
        if (this.foodPos0 === this.height || (this.foodPos0 === this.height - 1 && Math.random() > 0.5)) {
            return {...this, foodDir0: "down", foodPos0: this.foodPos0 - 1};
        } else {
            return {...this, foodPos0: (this.foodDir0 === "down" ? this.foodPos0 - 1 : this.foodPos0 + 1)};
        }
    }*/

    moveFood: (index: 0 | 1 | 2 | 3) => ChefGameState = (index: 0 | 1 | 2 | 3) => {
        if (this.foodPos[index] === this.height || (this.foodPos[index] === this.height - 1 && Math.random() > 0.5)) {
            return {
                ...this,
                foodDir: {
                    ...this.foodDir,
                    [index]: "down"
                },
            };
        } else {
            return {
                ...this,
                foodPos: {
                    ...this.foodPos,
                    [index]: this.foodDir[index] === "down" ? this.foodPos[index] - 1 : this.foodDir[index] + 1
                },
            };
        }
    }

    reflect: () => ChefGameState = () => {
        return this; // TODO
    }
}