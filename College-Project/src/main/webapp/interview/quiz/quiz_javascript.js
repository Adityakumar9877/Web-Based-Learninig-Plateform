// Define your quiz questions and answers
const quizData = [
   {
        question: "1.What is JavaScript?",
        options: ["JavaScript is a scripting language used to make the website interactive", "JavaScript is an assembly language used to make the website interactive", " JavaScript is a compiled language used to make the website interactive", "None of the mentioned"],
        answer: "JavaScript is a scripting language used to make the website interactive"
        
    },
    {
        question: "2.Which of the following is correct about JavaScript?",
        options: ["avaScript is an Object-Based language", "JavaScript is Assembly-language", "JavaScript is an Object-Oriented language", " JavaScript is a High-level language"],
        answer: "JavaScript is an Object-Based language"
    },
    {
        question: "3.Arrays in JavaScript are defined by which of the following statements?",
        options: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string","It is an ordered list of functions"      ],
        answer: "It is an ordered list of values"
    },
    {
        question: "4.Which of the following is not javascript data types?",
        options: ["Null typet", "Undefined type", "Number type", "All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        question: "5.Which of the following can be used to call a JavaScript Code Snippet?",
        options: ["Function/Method", " Preprocessor", "Triggering Eventh", "RMI"],
        answer: "Function/Method"
    },
    {
        question:"6.Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        options: ["Position", "Windoww", " Standard","Location"],
        answer: "Window"
    },
    {
        question:"7.Which of the following scoping type does JavaScript use?",
        options: ["Sequential", "Segmental", "Lexical","Literal"],
        answer: " Lexical"
    },
    {
        question:"8.Why event handlers is needed in JS?",
        options: ["Allows JavaScript code to alter the behaviour of windows", "Adds innerHTML page to the code", "Change the server location"," Performs handling of exceptions and occurrences"],
        answer: " Allows JavaScript code to alter the behaviour of windows"
    },
    {
        question: "9.Which of the following is not a framework?",
        options: [" JavaScript .NET", " JavaScript", "Cocoa JS      ", "jQuery"],
        answer: "JavaScript"
    },
    {
        question: "10.Which of the following is not an error in JavaScript?",
        options: ["Missing of Bracket", "Division by zero", "Syntax error","Missing of semicolons"],
        answer: "Division by zero"
    },
   
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

function loadQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;

    optionsElement.innerHTML = '';
    quizQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', checkAnswer);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(e) {
    const selectedOption = e.target.textContent;
    const quizQuestion = quizData[currentQuestion];

    if (selectedOption === quizQuestion.answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = `You scored ${score} out of ${quizData.length} questions.`;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
}

loadQuestion();
