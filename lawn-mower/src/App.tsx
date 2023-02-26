import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState<String | ArrayBuffer | null>('');

  const handleFile = (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function() {
      setData(fileReader.result);
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
