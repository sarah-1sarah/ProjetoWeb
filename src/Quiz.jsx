import React, { useState } from 'react';
import Question from './Question';
import './styles.css';

function Quiz({ quizData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentCategory = quizData[currentCategoryIndex];
  const currentQuestion = currentCategory.perguntas[currentQuestionIndex];

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < currentCategory.perguntas.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      
      const nextCategoryIndex = currentCategoryIndex + 1;
      if (nextCategoryIndex < quizData.length) {
        setCurrentCategoryIndex(nextCategoryIndex);
        setCurrentQuestionIndex(0);
      } else {
        alert(`Quiz concluído! Sua pontuação: ${score}/18`);
      }
    }
  };

  return (
    <div className="quiz-container">
  
      <Question
        question={currentQuestion}
        categoria={currentCategory.categoria} 
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
  
}

export default Quiz;
