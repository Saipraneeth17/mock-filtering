import React, { useState } from 'react';
import Filter from './Filter';
import questionsData from '../assets/QuestionData'; // Assuming you have questionsData file with your questions

const QuestionsPage = () => {
  const [filteredQuestions, setFilteredQuestions] = useState(questionsData);
  
  const handleFilter = (filters) => {
    let filteredData = questionsData;

    if (filters.subject) {
      filteredData = filteredData.filter(question => question.subject === filters.subject);
    }
    if (filters.subTopic) {
      filteredData = filteredData.filter(question => question.subTopic === filters.subTopic);
    }
    if (filters.difficulty) {
      filteredData = filteredData.filter(question => question.difficulty === filters.difficulty);
    }
    if (filters.questionType) {
      filteredData = filteredData.filter(question => question.questionType === filters.questionType);
    }

    setFilteredQuestions(filteredData);
  };

  return (
    <div>
      <h1>Questions Page</h1>
      <Filter onFilter={handleFilter} />
      
      <div>
        <h2>Filtered Questions</h2>
        <ul>
          {filteredQuestions.map(question => (
            <li key={question.id}>
              <h3>{question.question}</h3>
              <p>Subject: {question.subject}</p>
              <p>Sub-Topic: {question.subTopic}</p>
              <p>Difficulty: {question.difficulty}</p>
              <p>Question Type: {question.questionType}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsPage;
