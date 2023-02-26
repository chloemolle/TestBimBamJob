import { Position, Direction } from "../types";

const LawnMower = (maxPosition: Position, initialPosition: Position, initialDirection: Direction) => {
    const _maxPosition = maxPosition;
    const _currentPosition = initialPosition;
    const _currentDirection = initialDirection;

    return {
        getPosition () {
            return _currentPosition
        },
        getDirection () {
            return _currentDirection
        },
    };
};

export default LawnMower;
