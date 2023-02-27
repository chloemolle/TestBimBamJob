import LawnMower from './interfaces/LawnMower';
import { Position, Direction } from './types';

export const moveLawnMowers = (data: string | ArrayBuffer) =>  {
    const dataList = data.toString().split('\n');
    const infos = [];
    const maxPosition: Position = [parseInt(dataList[0].split('')[0]), parseInt(dataList[0].split('')[1])];

    for (let i = 1; i < dataList.length - 1; i += 2) {
      const initialInfo = dataList[i].split(' ');
      const initialPosition: Position = [parseInt(initialInfo[0].split('')[0]), parseInt(initialInfo[0].split('')[1])]
    
      const lawnMowers = LawnMower(maxPosition, initialPosition, initialInfo[1] as Direction);
      lawnMowers.move(dataList[i + 1].split(''));
    
      const lawnMowerNumber = Math.ceil(i/2);
      infos.push(`Position finale pour la tondeuse ${lawnMowerNumber}: [${lawnMowers.getPosition()}] et orientation
        ${lawnMowers.getDirection()}`);
    }
    return infos;
  }
