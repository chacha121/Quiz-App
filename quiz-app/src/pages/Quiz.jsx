import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionsCard";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questionsData.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]); // list of questions
  const [curr, setCurr] = useState(0); // current question index
  const [ans, setAns] = useState([]); // answers array
  const navigate = useNavigate();

  // Load from local JSON file
  useEffect(() => {
    const formatted = questionsData.map((q) => ({
      question: q.question,
      options: [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      ),
      answer: q.correct_answer, //
    }));
    setQuestions(formatted);
    setAns(Array(formatted.length).fill(null)); //
  }, []);

  // Save selected option for current question
  const handleSelect = (option) => {
    const newAnswers = [...ans];
    newAnswers[curr] = option;
    setAns(newAnswers);
  };

  // Next or Submit
  const handleNext = () => {
    if (curr < questions.length - 1) {
      setCurr(curr + 1);
    } else {
      // calculate score
      const score = ans.reduce(
        (acc, UserAns, i) => (UserAns === questions[i].answer ? acc + 1 : acc),
        0
      );
      navigate("/results", { state: { questions, ans, score } });
    }
  };

  //Back Button
  const handleBack = () => {
    if (curr > 0) {
      setCurr(curr - 1);
    }
  };

  // Loading state
  if (!questions.length) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-xl mx-auto">
      {/* Render current question */}
      <QuestionCard
        question={questions[curr].question}
        options={questions[curr].options}
        onSelect={handleSelect}
        selected={ans[curr]}
      />

      {/* Navigation row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <span className="text-gray-600 font-medium">
          Question {curr + 1} of {questions.length}
        </span>

        <div className="flex gap-3">
          {curr > 0 && (
            <button
              onClick={() => setCurr(curr - 1)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
            >
              Back
            </button>
          )}

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            {curr === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
