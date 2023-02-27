import React, { useState } from 'react';
import './App.css';
import { moveLawnMowers } from '../helpers/utils';

function App() {
  const [lawnMowersInfo, setLawnMowersInfo] = useState<Array<string>>(['']);

  const handleFile = (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      if (fileReader.result) setLawnMowersInfo(moveLawnMowers(fileReader.result));
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
