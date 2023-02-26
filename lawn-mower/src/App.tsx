import React, { useEffect, useState } from 'react';
import './App.css';
import LawnMower from './interfaces/LawnMower';
import { Position, Direction } from './types';

function App() {
  const [data, setData] = useState<any>('');

  const moveLawnMowers = (dataList: Array<string>) =>  {
    const maxPosition: Position = [dataList[0].split('')[0], dataList[0].split('')[1]];
    const lawnMowerInfoList = [];

    for (let i = 1; i < dataList.length - 1; i += 2) {
      const initialInfo = dataList[i].split(' ');
      const initialPosition: Position = [initialInfo[0].split('')[0], initialInfo[0].split('')[1]]
      const lawnMowers = LawnMower(maxPosition, initialPosition, initialInfo[1] as Direction);
      lawnMowers.move(dataList[i + 1]);
      lawnMowerInfoList.push(lawnMowers.getPosition());
      lawnMowerInfoList.push(lawnMowers.getDirection());
    }

    setData(lawnMowerInfoList);
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
      BimBamJob Test <div>{`${data}`}</div>
      <input type="file" onChange={(e) => (e?.target?.files?.length && handleFile(e.target.files[0]))} />
    </div>
  );
}

export default App;
