// Define your quiz questions and answers
const quizData = [
   {
        question: "1. Who invented Java Programming?",
        options: ["Guido van Rossum      ", "James Gosling", "Dennis Ritchie", " Bjarne Stroustrup"],
        answer: "James Gosling"
    },
    {
        question: "2.Which statement is true about Java?",
        options: ["Java is a sequence-dependent programming language", "Java is a code dependent programming language", "Java is a platform-dependent programming language", "Java is a platform-independent programming language"],
        answer: "Java is a platform-independent programming language"
    },
    {
        question: "3.Which component is used to compile, debug and execute the java programs?",
        options: ["JRE", "JIT", "JDK","JDK"      ],
        answer: "JDK"
    },
    {
        question: "4.Which one of the following is not a Java feature?",
        options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
        answer: "Use of pointers"
    },
    {
        question: "5.Which of these cannot be used for a variable name in Java?",
        options: [" identifier & keyword", "  identifier", " keyword", "none of the mentioned"],
        answer: " keyword"
    },
    {
        question:"6.What is the extension of java code files?",
        options: [".js", ".txt", "class","..java"],
        answer: ".java"
    },
    {
        question:"7.Which of the following is not an OOPS concept in Java?",
        options: [" Polymorphism", " Inheritance", "Compilation","Encapsulation"],
        answer: " Compilation"
    },
    {
        question:"8.Which of the following is a type of polymorphism in Java Programming?",
        options: ["Multiple polymorphism", "Compile time polymorphism", "Multilevel polymorphism"," Execution time polymorphism"],
        answer: " Compile time polymorphism"
    },
    {
        question: "9.What is Truncation in Java?",
        options: [" Floating-point value assigned to a Floating type     ", " Floating-point value assigned to an integer type","Integer value assigned to floating type","Integer value assigned to floating type"],
        answer: "Floating-point value assigned to a Floating type"
    },
    {
        question: "10. Which class provides system independent server side implementation?",
        options: ["Server", "color", "ServerReader      ", "Socket","ServerSocket"],
        answer: "ServerSocket"
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
