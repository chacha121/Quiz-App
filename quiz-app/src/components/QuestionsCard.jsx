import React from 'react'

const QuestionsCard = ({ question, options, onSelect, selected }) => {
  return (
    <div className='p-6 bg-white rounded-xl shadow-md'>
      <h2 className='text-lg font-semibold mb-4'>{question}</h2>

      {/* potions list */}
      <ul className='space-y-2'>
        {options.map((opt, i) => (
          <li
            key={i}
            onClick={() => onSelect(opt)} //call parent when clicked</ul>
            className={`p-2 border rounded cursor-pointer ${selected === opt 
            ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsCard;