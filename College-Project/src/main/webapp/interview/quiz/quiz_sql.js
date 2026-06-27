// Define your quiz questions and answers
const quizData = [
   {
        question: "1. What is SQL Server?",
        options: ["SQL Server is a relational database management system    ", " SQL Server is a software whose main purpose is to store and retrieve data", "SQL Server is a highly secure server ", " All of the mentioned"],
        answer: "SQL Server is a relational database management system"
    },
    {
        question: "2.When was the first version of Microsoft SQL Server released?",
        options: ["1991", "1990 ", "1988", "1983"],
        answer: "1988"
    },
    {
        question: "3.Which of the following companies originally worked together to create and market the first version of SQL Server?",
        options: ["Sybase", "Ashton-Tate", "Microsoft"," All of the Mentioned"      ],
        answer: " All of the Mentioned"
    },
    {
        question: "4. Which was the first version of SQL Server to introduce in-memory capability?",
        options: [" SQL Server 2005", " SQL Server 2008", " SQL Server 2012", " SQL Server 2014"],
        answer: " SQL Server 2014"
    },
    {
        question: "5.Which of the following data type is not present in SQL Server?",
        options: [" geography", " hierarchyid", "boolean", "bit"],
        answer: " boolean"
    },
    {
        question:"6.SQL Server has mainly how many types of views?",
        options: ["four", "three", "one","two"],
        answer: "two"
    },
    {
        question:"7.Which of the following joins are SQL server default?",
        options: [" Inner ", " Equi", "Outer","None of the Mentioned"],
        answer: "Inner"
    },
    {
        question:"8.Which is the default field terminator for bulk insert in SQL Server?",
        options: ["Brackets", "Parenthesis", "Full stop"," Comma"],
        answer: "Comma"
    },
    {
        question: "9.Which of the following pair of technology is supported in SQL Server?",
        options: [" Mirroring and Clustering   ", " Mirroring and Log Shipping","Mirroring and Replication","All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        question: "10. Which of the following operation requires to run the SQL Server Setup on the node?",
        options: ["Updatet", "Add", "Remove    ", "All of the mentioned"],
        answer: "All of the mentioned"
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
