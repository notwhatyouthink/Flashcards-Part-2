import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {

  const [cards, setCards] = useState([
  { 
    question: "What does HTML stand for?", 
    answer: "HyperText Markup Language",
    difficulty: "easy",
    image: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
  },
  { 
    question: "What does CSS stand for?", 
    answer: "Cascading Style Sheets",
    difficulty: "easy",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
  },
  { 
    question: "What is a closure in JavaScript?", 
    answer: "A function that has access to variables from an outer scope",
    difficulty: "hard",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
  },
  { 
    question: "What does API stand for?", 
    answer: "Application Programming Interface",
    difficulty: "medium",
    image: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png"
  },
  { 
    question: "What is recursion?", 
    answer: "A function that calls itself",
    difficulty: "medium",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
  },
  { 
    question: "What does SQL stand for?", 
    answer: "Structured Query Language",
    difficulty: "easy",
    image: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png"
  },
  { 
    question: "Explain the event loop in JavaScript", 
    answer: "A mechanism that handles asynchronous operations in JavaScript",
    difficulty: "hard",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
  },
  { 
    question: "What is Git?", 
    answer: "A version control system for tracking changes in code",
    difficulty: "easy",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
  },
  { 
    question: "What does JSON stand for?", 
    answer: "JavaScript Object Notation",
    difficulty: "easy",
    image: "https://cdn-icons-png.flaticon.com/512/136/136525.png"
  },
  { 
    question: "What is React?", 
    answer: "A JavaScript library for building user interfaces",
    difficulty: "medium",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
  }
]);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(''); // 'correct', 'incorrect', or ''

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }

  const handleNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setUserGuess('');
      setFeedback('');
    }
  }

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setUserGuess('');
      setFeedback('');
    }
  }

  const handleSubmitGuess = () => {
    if (userGuess.toLowerCase().trim() === cards[currentIndex].answer.toLowerCase().trim()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  }

  return (
    <div className="App">
      <h1>🧠 Computer Science Flashcards</h1>
      <h3>Test your CS knowledge with difficulty levels! Sharnica Jeudy Z23582376</h3>
      <h4>Card {currentIndex + 1} of {cards.length}</h4>

      <Card 
        question={cards[currentIndex].question}
        answer={cards[currentIndex].answer}
        isFlipped={isFlipped}
        onCardClick={handleCardClick}
        difficulty={cards[currentIndex].difficulty}
        image={cards[currentIndex].image}
      />

      {/* Input box for guessing */}
      <div className="guess-container">
        <input 
          type="text" 
          placeholder="Type your answer here..."
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className={`guess-input ${feedback}`}
        />
        <button onClick={handleSubmitGuess} className="submit-btn">Submit Guess</button>
      </div>

      {/* Feedback message */}
      {feedback === 'correct' && <p className="feedback correct-feedback">✅ Correct!</p>}
      {feedback === 'incorrect' && <p className="feedback incorrect-feedback">❌ Incorrect. Try again!</p>}

      {/* Navigation buttons */}
      <div className="navigation">
        <button 
          onClick={handlePrevCard} 
          disabled={currentIndex === 0}
          className="nav-btn"
        >
          ← Previous
        </button>
        <button 
          onClick={handleNextCard} 
          disabled={currentIndex === cards.length - 1}
          className="nav-btn"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default App;
