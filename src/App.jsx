import React, { useState } from 'react';
import './App.css';

const cardSet = {
  title: "React Basics Flashcards",
  description: "Learn the fundamental concepts of React",
  cards: [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces" },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript used with React" },
    { question: "What is a component?", answer: "A reusable piece of code in React" },
    { question: "What is state?", answer: "An object that holds data in a React component" },
    { question: "What are props?", answer: "A way to pass data from parent to child components" },
  ]
};

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const flipCard = () => {
    setIsShowingAnswer(!isShowingAnswer);
  };

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardSet.cards.length);
    setCurrentCardIndex(randomIndex);
    setIsShowingAnswer(false);
  };

  return (
    <div className="flashcard-container">
      <h1>{cardSet.title}</h1>
      <p>{cardSet.description}</p>
      <p>Total cards: {cardSet.cards.length}</p>
      
      <div className="flashcard" onClick={flipCard}>
        {isShowingAnswer ? (
          <p>Answer: {cardSet.cards[currentCardIndex].answer}</p>
        ) : (
          <p>Question: {cardSet.cards[currentCardIndex].question}</p>
        )}
      </div>
      
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default App;