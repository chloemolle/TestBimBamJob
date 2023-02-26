import React, { useState } from 'react';
import './App.css';
import LawnMower from '../interfaces/LawnMower';
import { Position, Direction } from '../types';

function App() {
  const [lawnMowersInfo, setLawnMowersInfo] = useState<Array<string>>(['']);

  const moveLawnMowers = (dataList: Array<string>) =>  {
    const infos = [];
    const maxPosition: Position = [parseInt(dataList[0].split('')[0]), parseInt(dataList[0].split('')[1])];

    for (let i = 1; i < dataList.length - 1; i += 2) {
      const initialInfo = dataList[i].split(' ');
      const initialPosition: Position = [parseInt(initialInfo[0].split('')[0]), parseInt(initialInfo[0].split('')[1])]
    
      const lawnMowers = LawnMower(maxPosition, initialPosition, initialInfo[1] as Direction);
      lawnMowers.move(dataList[i + 1]);
    
      const lawnMowerNumber = Math.ceil(i/2);
      infos.push(`Position finale pour la tondeuse ${lawnMowerNumber}: [${lawnMowers.getPosition()}] et orientation
        ${lawnMowers.getDirection()}`);
    }
    setLawnMowersInfo(infos);
  }

  const handleFile = (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function() {
      if (fileReader.result) moveLawnMowers(fileReader.result.toString().split('\n'));
    };
  }

  return (
    <div className="App">
      BimBamJob Test
      <div>{lawnMowersInfo.map((info, index) => <div key={index}>{info}</div>)}</div>
      <input type="file" onChange={(e) => (e?.target?.files?.length && handleFile(e.target.files[0]))} />
    </div>
  );
}

export default App;
