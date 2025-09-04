import { useState } from 'react'
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz"

function App() {

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col text-center'>
      {/* pages routing */}
      <header className='w-full bg-white shadow-sm'>
        <h2 className='mx-auto pt-4 text-2xl font-bold text-gray-700'>Quiz</h2>
      </header>

        <Routes>
          {/* redirect root to quiz page */}
          <Route path="/" element={<Navigate to="/quiz" />} /> 
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/results' element={<Result />} />
        </Routes>
    </div>
  )
}

export default App
