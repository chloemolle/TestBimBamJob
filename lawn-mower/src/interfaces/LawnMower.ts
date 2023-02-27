import { Position, Direction, Correspondance } from "../types";
import { RIGHT, LEFT, FORWARD, NORTH, EAST, WEST, SOUTH } from "../constants"

const RightMoveCorrespondance : Correspondance = { [EAST]: SOUTH, [SOUTH]: WEST, [WEST]: NORTH, [NORTH]: EAST };
const LeftMoveCorrespondance : Correspondance = { [EAST]: NORTH, [SOUTH]: EAST, [WEST]: SOUTH, [NORTH]: WEST };

const LawnMower = (maxPosition: Position, initialPosition: Position, initialDirection: Direction) => {
    let _currentPosition = initialPosition;
    let _currentDirection = initialDirection;

    const changeDirection = (d : string) => {
        if (d === RIGHT) _currentDirection = RightMoveCorrespondance[_currentDirection];
        else if (d === LEFT) _currentDirection = LeftMoveCorrespondance[_currentDirection];
    };

    const moveForward = () => {
        switch(_currentDirection) {
            case EAST :
                if (_currentPosition[0] < maxPosition[0]) _currentPosition[0] += 1;
                break;
            case SOUTH :
                if (_currentPosition[1] > 0) _currentPosition[1] -= 1;
                break;
            case WEST :
                if (_currentPosition[0] > 0) _currentPosition[0] -= 1;
                break;
            case NORTH :
                if (_currentPosition[1] < maxPosition[1]) _currentPosition[1] += 1;
                break;
        }
    }

    return {
        getPosition () {
            return _currentPosition
        },
        getDirection () {
            return _currentDirection
        },
        move (instructionList: Array<string>) {
            for (const instruction of instructionList) {
                if ([RIGHT, LEFT].includes(instruction)) changeDirection(instruction);
                if (instruction === FORWARD) moveForward();
            }
        }
    };
};

export default LawnMower;
