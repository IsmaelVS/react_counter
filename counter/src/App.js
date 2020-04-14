import React, { useState } from 'react';

import Header from './components/Header';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    if(counter < 10){
      setCounter(counter + 1);
    }
    else{
      alert('Chegou em 10, contador será zerado');
      setCounter(0);
    }
  }

  return (
    <>
      <Header>Contador: {counter}</Header>
      <Button onClick={increment} title="Incrementar"/>
    </>
  );
}

export default App;
