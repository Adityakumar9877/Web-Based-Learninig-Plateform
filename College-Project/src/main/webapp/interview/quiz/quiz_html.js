// Define your quiz questions and answers
const quizData = [
   {
        question: "1.What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna", "Madrid"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "2.how many tags are in a regular elemen",
        options: ["2", "1", "4", "5"],
        answer: "2"
    },
    {
        question: "3.< br  / > What type of tag is this?",
        options: ["Break tag", "A broken one", "Michelangelo","An opening tag"      ],
        answer: "Break tag"
    },
    {
        question: "4.What is the difference between an opening tag and a closing tag?",
        options: ["Opening tag has a / in front", "Closing tag has a / in front", "There is no difference", "Michelangelo"],
        answer: "Closing tag has a / in front"
    },
    {
        question: "5.< body > Is this an opening tag or a closing tag?",
        options: ["opening", "closing", "both", "not both"],
        answer: "both"
    },
    {
        question:"6.Where is the meta tag only found?",
        options: ["The last page", "The home page", "The second page","stock"],
        answer: "The home page"
    },
    {
        question:"7.Who is the father of HTML?",
        options: ["Rasmus Lerdorf", "Tim Berners-Lee", "Brendan Eich","stock"],
        answer: " Tim Berners-Lee"
    },
    {
        question:"8.What is the correct syntax of doctype in HTML5?",
        options: ["</doctype html>", "<doctype html>", "<doctype html!>"," <!doctype html>"],
        answer: " <!doctype html>"
    },
    {
        question: "9.Which of the following tag is used for inserting the largest heading in HTML?",
        options: [" head", "<h1>", " <h6>", "heading"],
        answer: "<h1>"
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
