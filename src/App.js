import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0); // Compteur
  const [goal, setGoal] = useState(null); // Objectif aléatoire
  const [timeLeft, setTimeLeft] = useState(null); // Temps restant
  const [gameOver, setGameOver] = useState(false); // État du jeu terminé
  const [goalAchievedCount, setGoalAchievedCount] = useState(0); // Nombre de fois où l'objectif a été atteint

  const increment = () => {
    if (!gameOver) setCount(count + 1);
  };

  const decrement = () => {
    if (!gameOver) setCount(count - 1);
  };

  const generateRandomGoal = () => {
    const min = 3;
    const max = 10;
    const randomAvg = Math.floor(Math.random() * (max - min + 1)) + min; // Génère un entier
    setGoal(randomAvg);
    setCount(0); // Remet le compteur à 0
    setTimeLeft(10); // Initialise le temps restant à 10 secondes
    setGameOver(false); // Réinitialise l'état de la partie
  };

  // useEffect pour le timer
  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true); // Le temps est écoulé, le jeu est terminé
    }

    if (timeLeft > 0 && goal !== null) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000); // Diminue le temps toutes les secondes

      return () => clearTimeout(timer); // Nettoyage du timer
    }
  }, [timeLeft, goal]);

  // Vérifier si l'objectif est atteint
  useEffect(() => {
    if (count === goal && goal !== null) {
      setGoalAchievedCount(goalAchievedCount + 1); // Incrémente le compteur d'objectifs atteints
      if (goalAchievedCount < 2) {
        generateRandomGoal(); // Génère un nouvel objectif
      } else {
        setGameOver(true); // Termine le jeu après avoir atteint l'objectif deux fois
      }
    }
  }, [count, goal, goalAchievedCount]);

  return (
    <div className="App">
      <p>Count: {count}</p> {/* Compteur */}
      <p>Objectif: {goal}</p> {/* Affichage de l'objectif */}
      <p>Temps restant: {timeLeft !== null ? timeLeft : 'Cliquez sur "Generate Goal" pour commencer'}</p> {/* Affichage du temps restant */}
      <button onClick={decrement} disabled={gameOver}>Decrement</button> {/* Bouton de décrémentation */}
      <button onClick={increment} disabled={gameOver}>Increment</button> {/* Bouton d'incrémentation */}
      <button onClick={generateRandomGoal} disabled={timeLeft !== null && timeLeft > 0}>Generate Goal</button> {/* Bouton pour générer l'objectif */}
      {count === goal && <p>Bravo! Vous avez atteint l'objectif.</p>} {/* Message de victoire */}
      {gameOver && goalAchievedCount >= 2 && <p>Vous avez atteint l'objectif deux fois, bien joué!</p>} {/* Message de fin */}
      {gameOver && timeLeft === 0 && count !== goal && <p>Dommage, temps écoulé!</p>} {/* Message de défaite */}
    </div>
  );
}

export default App;
