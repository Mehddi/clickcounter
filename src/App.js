import './App.css';
import React, { useState } from 'react'; //importation du hook useState

function App() {
  const [count, setCount] = useState(0); //définition du composant; count : valeur actuelle; setCount : fonction pourmettre à jour la valeur
  const targetNumber = 10; //Objectif

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      
      <p>Count: {count}</p>
      <p>Objectif: {targetNumber}</p>
      <button onClick={increment}>Increment</button> {/*lol*/}
      {count === targetNumber && <p>Bravo!</p>}
    </div>
  );
}

export default App;
