// import { useState, useEffect } from 'react'
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}

export default App;
