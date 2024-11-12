import React, { useState } from 'react';
import Quiz from './Quiz';
import quizData from './quizData.json';
import './styles.css';


function App() {
  const [hasStarted, setHasStarted] = useState(false);

  const startQuiz = () => {
    setHasStarted(true);
  };

  return (
    <div className="App">
      {!hasStarted ? (
        <div className="start-screen">
          <h1>QUIZ WEB</h1>
          <button onClick={startQuiz} className="start-button">Iniciar</button>
        </div>
      ) : (
        <Quiz quizData={quizData.quiz} />
      )}
    </div>
  );

  
  
}

export default App;
