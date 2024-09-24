import './App.css';
import React, { useState } from 'react'; //importation du hook useState

function App() {
  const [count, setCount] = useState(0); // Compteur
  const [goal, setGoal] = useState(null); // Objectif aléatoire

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const generateRandomGoal = () => {
    const min = 3;
    const max = 10;
    // Générer un nombre aléatoire entre 3 et 10
    const randomAvg = (Math.floor(Math.random() * (max - min) + min)); // Limiter à deux décimales
    setGoal(Number(randomAvg)); // Met à jour l'objectif en tant que nombre
  };

  return (
    <div className="App">
      <p>Count: {count}</p> {/* Compteur */}
      <p>Objectif: {goal}</p> {/* Affichage de l'objectif */}
      <button onClick={increment}>Increment</button> {/* Bouton d'incrémentation */}
      <button onClick={decrement}>Decrement</button> {/* Bouton de décrementation */}
      <button onClick={generateRandomGoal}>Generate Goal</button> {/* Bouton pour générer l'objectif */}
      {count === goal && <p>Bravo!</p>} {/* Message de victoire si count atteint l'objectif */}
    </div>
  );
}

export default App;

