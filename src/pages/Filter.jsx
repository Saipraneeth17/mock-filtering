import React, { useState } from 'react';

const subjects = ['Java', 'Python', 'DevOps'];
const subTopics = {
  Java: ['Basics', 'Object-Oriented Programming', 'Exceptions'],
  Python: ['Control Flow', 'Functions', 'Lists'],
  DevOps: ['Docker Basics', 'Continuous Integration', 'Container Orchestration']
};
const difficulties = ['Easy', 'Medium', 'Hard'];
const questionTypes = ['Direct', 'Scenario'];

const Filter = ({ onFilter }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSubTopic, setSelectedSubTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedQuestionType, setSelectedQuestionType] = useState('');

  const handleFilter = () => {
    const filters = {
      subject: selectedSubject,
      subTopic: selectedSubTopic,
      difficulty: selectedDifficulty,
      questionType: selectedQuestionType
    };
    onFilter(filters);
  };

  return (
    <div>
      <label>
        Subject:
        <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </label>

      <label>
        Sub-Topic:
        <select value={selectedSubTopic} onChange={(e) => setSelectedSubTopic(e.target.value)}>
          <option value="">Select Sub-Topic</option>
          {selectedSubject && subTopics[selectedSubject].map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </label>

      <label>
        Difficulty:
        <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </label>

      <label>
        Question Type:
        <select value={selectedQuestionType} onChange={(e) => setSelectedQuestionType(e.target.value)}>
          <option value="">Select Question Type</option>
          {questionTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>

      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
