import { Position, Direction, Correspondance } from "../types";

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

    const moveForward = () => {
        switch(_currentDirection) {
            case 'E' :
                if (_currentPosition[0] < maxPosition[0]) _currentPosition[0] += 1;
                break;
            case 'S' :
                if (_currentPosition[0] > 0) _currentPosition[1] -= 1;
                break;
            case 'W' :
                if (_currentPosition[0] > 0) _currentPosition[0] -= 1;
                break;
            case 'N' :
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
        move (instructions: String) {
            const instructionList = instructions.split('');
            for (const instruction of instructionList) {
                if (['R', 'L'].includes(instruction)) changeDirection(instruction);
                if (instruction === 'F') moveForward();
            }
        }
    };
};

export default LawnMower;
