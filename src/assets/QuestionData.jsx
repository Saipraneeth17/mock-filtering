const questionsData = [
    {
        id: 1,
        question: "What is object-oriented programming?",
        options: [
            "A. It is a programming paradigm based on the concept of objects.",
            "B. It is a programming paradigm based on the concept of functions.",
            "C. It is a programming paradigm based on the concept of variables.",
            "D. It is a programming paradigm based on the concept of arrays."
        ],
        correctOption: "A",
        subject: "Java",
        subTopic: "Basics",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 2,
        question: "What is the output of the following Python code?",
        options: [
            "Option 1. 10",
            "Option 2. 20",
            "Option 3. 30",
            "Option 4. 40"
        ],
        correctOption: "Option 2",
        subject: "Python",
        subTopic: "Control Flow",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 3,
        question: "Which command is used to create a Docker container?",
        options: [
            "A. docker run",
            "B. docker create",
            "C. docker start",
            "D. docker stop"
        ],
        correctOption: "B",
        subject: "DevOps",
        subTopic: "Docker Basics",
        difficulty: "Hard",
        questionType: "Scenario"
    },
    {
        id: 4,
        question: "What is a class in Java?",
        options: [
            "A. A template for creating objects.",
            "B. A data structure.",
            "C. A function.",
            "D. A variable."
        ],
        correctOption: "A",
        subject: "Java",
        subTopic: "Object-Oriented Programming",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 5,
        question: "What is the keyword used to define a function in Python?",
        options: [
            "A. func",
            "B. define",
            "C. function",
            "D. def"
        ],
        correctOption: "D",
        subject: "Python",
        subTopic: "Functions",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 6,
        question: "What is the main benefit of using containers in DevOps?",
        options: [
            "A. Improved security.",
            "B. Faster deployment.",
            "C. Better scalability.",
            "D. Easier debugging."
        ],
        correctOption: "B",
        subject: "DevOps",
        subTopic: "Containerization",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 7,
        question: "What is a constructor in Java?",
        options: [
            "A. A method that initializes an object.",
            "B. A method that deletes an object.",
            "C. A method that defines an object.",
            "D. A method that duplicates an object."
        ],
        correctOption: "A",
        subject: "Java",
        subTopic: "Object-Oriented Programming",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 8,
        question: "Which data structure is used to implement a queue in Python?",
        options: [
            "A. List",
            "B. Stack",
            "C. Queue",
            "D. Dictionary"
        ],
        correctOption: "A",
        subject: "Python",
        subTopic: "Data Structures",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 9,
        question: "What is the purpose of Jenkins in DevOps?",
        options: [
            "A. Continuous Integration.",
            "B. Version Control.",
            "C. Containerization.",
            "D. Cloud Computing."
        ],
        correctOption: "A",
        subject: "DevOps",
        subTopic: "Continuous Integration",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 10,
        question: "What is the syntax for defining a list in Python?",
        options: [
            "A. ( )",
            "B. { }",
            "C. [ ]",
            "D. < >"
        ],
        correctOption: "C",
        subject: "Python",
        subTopic: "Data Structures",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 11,
        question: "What is inheritance in Java?",
        options: [
            "A. A mechanism where one class inherits properties and behaviors from another class.",
            "B. A mechanism where one class duplicates properties and behaviors from another class.",
            "C. A mechanism where one class hides properties and behaviors from another class.",
            "D. A mechanism where one class extends properties and behaviors from another class."
        ],
        correctOption: "A",
        subject: "Java",
        subTopic: "Object-Oriented Programming",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 12,
        question: "What is the output of the following Python code? \n x = 5 \n print(x > 3)",
        options: [
            "A. True",
            "B. False",
            "C. 5",
            "D. Error"
        ],
        correctOption: "A",
        subject: "Python",
        subTopic: "Control Flow",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 13,
        question: "What is the purpose of Kubernetes in DevOps?",
        options: [
            "A. Configuration Management.",
            "B. Container Orchestration.",
            "C. Continuous Integration.",
            "D. Cloud Computing."
        ],
        correctOption: "B",
        subject: "DevOps",
        subTopic: "Container Orchestration",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 14,
        question: "What is the keyword used for conditional statements in Python?",
        options: [
            "A. case",
            "B. if",
            "C. switch",
            "D. for"
        ],
        correctOption: "B",
        subject: "Python",
        subTopic: "Control Flow",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 15,
        question: "What is the purpose of the 'finally' block in Java?",
        options: [
            "A. To handle exceptions.",
            "B. To define cleanup actions.",
            "C. To define default actions.",
            "D. To define error messages."
        ],
        correctOption: "B",
        subject: "Java",
        subTopic: "Exception Handling",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 16,
        question: "What is the output of the following Python code? \n x = [1, 2, 3] \n print(x[0])",
        options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. Error"
        ],
        correctOption: "A",
        subject: "Python",
        subTopic: "Lists",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 17,
        question: "What is the purpose of Git in DevOps?",
        options: [
            "A. Configuration Management.",
            "B. Version Control.",
            "C. Continuous Integration.",
            "D. Container Orchestration."
        ],
        correctOption: "B",
        subject: "DevOps",
        subTopic: "Version Control",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 18,
        question: "What is the keyword used to exit a loop in Python?",
        options: [
            "A. exit",
            "B. continue",
            "C. stop",
            "D. break"
        ],
        correctOption: "D",
        subject: "Python",
        subTopic: "Control Flow",
        difficulty: "Easy",
        questionType: "Direct"
    },
    {
        id: 19,
        question: "What is polymorphism in Java?",
        options: [
            "A. A mechanism where one class inherits properties and behaviors from another class.",
            "B. A mechanism where one class duplicates properties and behaviors from another class.",
            "C. A mechanism where one class hides properties and behaviors from another class.",
            "D. A mechanism where one class can take on multiple forms."
        ],
        correctOption: "D",
        subject: "Java",
        subTopic: "Object-Oriented Programming",
        difficulty: "Medium",
        questionType: "Direct"
    },
    {
        id: 20,
        question: "What is the output of the following Python code? \n x = 5 \n y = 2 \n print(x % y)",
        options: [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 5"
        ],
        correctOption: "B",
        subject: "Python",
        subTopic: "Operators",
        difficulty: "Easy",
        questionType: "Direct"
    }
    // Add more questions as needed
];

export default questionsData;
