import React, { useState } from 'react';
import Timer from './Timer';
import './styles.css';

function Question({ question, categoria, onNextQuestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (key) => {
    setSelectedAnswer(key);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
    } else {
      alert('Por favor, selecione uma resposta.');
    }
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === question.resposta_correta;
    setSelectedAnswer('');
    setShowResult(false);
    onNextQuestion(isCorrect);
  };

  const handleTimeUp = () => {
    alert('Tempo esgotado! Que pena');
    
  };

  return (
    <div className="question-container">
      
      <h3 className="quiz-title">{categoria}</h3>

      
      <h2 className="question-text">{question.pergunta}</h2>
      <Timer duration={270} onTimeUp={handleTimeUp} />
      
      
      <div className="options-container">
        {question.opcoes.map((option) => (
          <button
            key={option.chave}
            onClick={() => handleAnswerSelect(option.chave)}
            className={`option-button ${selectedAnswer === option.chave ? 'selected' : ''}`}
            disabled={showResult}
          >
            {option.chave}) {option.texto}
          </button>
        ))}
      </div>

      
      {!showResult ? (
        <button onClick={handleSubmit} className="submit-button">Enviar Resposta</button>
      ) : (
        <div className="result-container">
          <p className={`result-text ${selectedAnswer === question.resposta_correta ? 'correct' : 'incorrect'}`}>
            {selectedAnswer === question.resposta_correta
              ? 'Resposta correta!'
              : `Resposta incorreta. A resposta correta era: ${question.resposta_correta}`}
          </p>
          <button onClick={handleNext} className="next-button">Próxima Questão</button>
        </div>
      )}
    </div>
  );
}

export default Question;
