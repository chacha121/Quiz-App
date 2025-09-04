import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {

  //access quiz state passed from quiz.jsx
  const {state} = useLocation();
  const navigate = useNavigate();
  const { questions, ans, score } = state || {};

  //if user visits results without answering
  if(!questions) return <p className='p-8'>No result found. Start a Quiz</p>


  return (

    <div className='p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto'>

      {/* score summary */}
      <h1 className='text-xl sm:text-2xl font-bold mb-6 text-center'>
        You scored {score}/{questions.length}
      </h1>

      {/* Question wise result */}
      <ul className='space-y-4'>
        {questions.map((q, i) => (
          <li key={i} className='p-4 border rounded bg-white shadow-sm'>
            <p className='font-semibold'>{q.question}</p>
            <p className={ans[i] === q.answer ? "text-green-600" : "text-red-600"}>
              Your Answer: {ans[i] || "Not Answered"}
            </p>
            <p className='text-blue-600'>
              Correct Answer: {q.answer}
            </p>
          </li>
        ))}
      </ul>

      {/* Restart quiz  */}
      <button
        onClick={() => navigate("/")}
        className='px-6 py-3 my-3 bg-blue-600 text-white rounded-lg w-full sm:w-auto'
      >
        Restart Quiz
      </button>
    </div>
  )
}

export default Result