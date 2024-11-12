// Result.js
import React from 'react';

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div>
      <h2>Resultado</h2>
      <p>
        Você acertou {score} de {totalQuestions} perguntas!
      </p>
      <button onClick={onRestart}>Recomeçar</button>
    </div>
  );
}

export default Result;
