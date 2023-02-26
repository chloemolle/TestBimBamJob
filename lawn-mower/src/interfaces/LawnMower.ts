import { Position, Direction } from "../types";

type Correspondance = { E: Direction, S: Direction, W: Direction, N: Direction }
const RightMoveCorrespondance : Correspondance = { E: 'S', S: 'W', W: 'N', N: 'E' };
const LeftMoveCorrespondance : Correspondance = { E: 'N', S: 'E', W: 'S', N: 'W' };

const LawnMower = (maxPosition: Position, initialPosition: Position, initialDirection: Direction) => {
    const _maxPosition = maxPosition;
    let _currentPosition = initialPosition;
    let _currentDirection = initialDirection;

    const changeDirection = (d : string) => {
        if (d === 'R') _currentDirection = RightMoveCorrespondance[_currentDirection];
        else if (d === 'L') _currentDirection = LeftMoveCorrespondance[_currentDirection];
    };

    return {
        getPosition () {
            return _currentPosition
        },
        getDirection () {
            return _currentDirection
        },
        move (instructions: String) {
            const instructionList = instructions.split('');
            for (const instruction of instructionList) {
                if (['R', 'L'].includes(instruction)) changeDirection(instruction);
            }
        }
    };
};

export default LawnMower;
