// Define your quiz questions and answers
const quizData = [
   {
        question: "1. What is PHP?",
        options: ["PHP is an open-source programming language   ", " PHP is used to develop dynamic and interactive websites", "PHP is used to develop dynamic and interactive websites", " All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        question: "2.Who is the father of PHP?",
        options: ["Drek Kolkevi", "Rasmus Lerdorf", "Willam Makepiece", " List Barely"],
        answer: "Rasmus Lerdorf"
    },
    {
        question: "3.What does PHP stand for??",
        options: ["PHP stands for Preprocessor Home Page", "APHP stands for Pretext Hypertext Processor", "PHP stands for Hypertext Preprocessor"," PHP stands for Personal Hyper Processor"      ],
        answer: " PHP stands for Hypertext Preprocessor"
    },
    {
        question: "4. Which of the following is not a variable scope in PHP?",
        options: [" Extern", " Local", " Static", " Global"],
        answer: " Extern"
    },
    {
        question: "5.Which of the following is the correct way to create a function in PHP?",
        options: [" Create myFunction()", " New_function myFunction()", "function myFunction()", "None of the above"],
        answer: "function myFunction()"
    },
    {
        question:"6.Which of the following is the correct way of defining a variable in PHP?",
        options: ["$variable name = value;", "$variable_name = value;", "$variable_name = value","$variable name as value;"],
        answer: "$variable_name = value;"
    },
    {
        question:"7.Which of the following function displays the information about PHP and its configuration?",
        options: [" php_info() ", " phpinfo()", "info()","None of the above"],
        answer: "phpinfo()"
    },
    {
        question:"8.Which of the following function is used to unset a variable in PHP?",
        options: ["delete()", "unset()", "unlink()"," None of the above"],
        answer: "unset()"
    },
    {
        question: "9.Which of the following is/are the code editors in PHP?",
        options: [" Notepad++   ", " Notepad","Adobe Dreamweaver","All of the above"],
        answer: "All of the above"
    },
    {
        question: "10. Which of the following function converts a string to all uppercase?",
        options: ["upper()", "uppercase()", "struppercase()  ", "strtoupper()"],
        answer: "strtoupper()"
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
