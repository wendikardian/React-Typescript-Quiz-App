import React, {useState} from 'react';
import { fetchQuizQuestion } from './API';
import QuestionCard from './components/QuestionCard';

// types

import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers ] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestion(TOTAL_QUESTIONS, Difficulty.EASY ));

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }



  return (
    <div className="App">
      <h1> React Quiz </h1>
      <button className="start" onClick={startTrivia}>
        Start The Quiz
      </button>

      <p className="score">
        Score :
      </p>

      <p>
        loading Question .....
      </p>

      {/* <QuestionCard 
        questionNr={number+1}
        totalQuestions={TOTAL_QUESTIONS}    
        question ={questions[number].question}
        answers= {questions[number].answers}
        userAnswers= {userAnswers ?  userAnswers[number] :undefined}
        callback = {checkAnswer }

      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question 
      </button>
    </div>  

  ); 
}

export default App;
