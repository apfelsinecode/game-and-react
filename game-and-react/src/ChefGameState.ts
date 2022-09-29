
export type Direction = "up" | "down";
export class ChefGameState {

    food = ['🥩', '🥦', '🥓', '🐟'];
    height = 4;

    foodPos0: number = 0;
    foodPos1: number = 3;
    foodPos2: number = 1;
    foodPos3: number = 2;
    
    panLifted: boolean = false;
    panPosition: number = 0;

    foodDir0: Direction = "up";
    foodDir1: Direction = "down";
    foodDir2: Direction = "up";
    foodDir3: Direction = "up";

    leftClick() {
        return Object.assign({}, this, {panPosition: Math.max(0, this.panPosition - 1)});
    }

    rightClick() {
        return Object.assign({}, this, {panPosition: Math.min(this.food.length - 1, this.panPosition + 1)})
    }

    lift() {
        return Object.assign({}, this, {panLifted: true})
    }

    unlift() {
        return Object.assign({}, this, {panLifted: false})
    }
}