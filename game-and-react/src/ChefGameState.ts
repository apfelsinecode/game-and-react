
export type Direction = "up" | "down";
export class ChefGameState {

    food = ['🥩', '🥦', '🥓', '🐟'];
    height = 4;

    foodPos0: number = 0;
    foodPos1: number = 3;
    foodPos2: number = 1;
    foodPos3: number = 2;

    foodPos = {
        0: 0,
        1: 3,
        2: 1,
        3: 2,
    }
    
    panLifted: boolean = false;
    panPosition: number = 0;

    foodDir0: Direction = "up";
    foodDir1: Direction = "down";
    foodDir2: Direction = "up";
    foodDir3: Direction = "up";

    foodDir = {
        0: "up",
        1: "down",
        2: "up",
        3: "up",
    }

    leftClick(): ChefGameState {
        return Object.assign({}, this, {panPosition: Math.max(0, this.panPosition - 1)});
    }

    rightClick(): ChefGameState {
        return Object.assign({}, this, {panPosition: Math.min(this.food.length - 1, this.panPosition + 1)})
    }

    lift(): ChefGameState {
        return Object.assign({}, this, {panLifted: true})
    }

    unlift(): ChefGameState {
        // return Object.assign({}, this, {panLifted: false})
        return {...this, panLifted: false}
    }

    /*stepFood0(): ChefGameState {
        // if (this.foodDir0)
        if (this.foodPos0 === this.height || (this.foodPos0 === this.height - 1 && Math.random() > 0.5)) {
            return {...this, foodDir0: "down", foodPos0: this.foodPos0 - 1};
        } else {
            return {...this, foodPos0: (this.foodDir0 === "down" ? this.foodPos0 - 1 : this.foodPos0 + 1)};
        }
    }*/

    stepFood(index: 0 | 1 | 2 | 3) : ChefGameState {
        if (this.foodPos0 === this.height || (this.foodPos0 === this.height - 1 && Math.random() > 0.5)) {
            return {
                ...this,
                foodDir: {
                    ...this.foodDir,
                    index: "down"
                },
            };
        } else {
            return {
                ...this,
                foodPos: {
                    ...this.foodPos,
                    index: this.foodDir[index] === "down" ? this.foodPos[index] - 1 : this.foodDir[index] + 1
                },
            };
        }
    }
}