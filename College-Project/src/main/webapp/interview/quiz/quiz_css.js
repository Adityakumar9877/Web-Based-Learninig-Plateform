// Define your quiz questions and answers
const quizData = [
   {
        question: "1. What is CSS?",
        options: ["CSS is a style sheet language        ", "CSS is the language used to style the HTML documents", " CSS is designed to separate the presentation and content,including layout, colors, and fonts", "All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        question: "2.Which of the following tag is used to embed css in html page?",
        options: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"],
        answer: "<style>"
    },
    {
        question: "3.Which of the following CSS selectors are used to specify a group of elements?",
        options: ["tag", "id", "class","both class and tag"      ],
        answer: "class"
    },
    {
        question: "4.Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        options: ["HTML", "PHP", "CSS", "Ajax"],
        answer: "CSS"
    },
    {
        question: "5.Which of the following CSS framework is used to create a responsive design?",
        options: ["django", " rails", "larawell", "bootstrap"],
        answer: "bootstrap"
    },
    {
        question:"6.Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        options: ["tage", "id", "class","both class and tag"],
        answer: "id"
    },
    {
        question:"7.Which of the following type of HTML tag is used to define an internal style sheet?",
        options: [" <script>f", " <link>", "<class>","<style>"],
        answer: " <style>"
    },
    {
        question:"8.Which of the following CSS property is used to make the text bold?",
        options: ["text-decoration: bold", "font-weight: bold", "font-style: bold"," text-align: bold"],
        answer: " font-weight: bold>"
    },
    {
        question: "9.Which of the following are the CSS Extension Prefixes for Webkit?",
        options: [" -chrome", "-web", "-o-        ", "-webkit"],
        answer: "-webkit"
    },
    {
        question: "10.Which of the following is not the property of the CSS box model?",
        options: ["margine", "color", "width      ", "height"],
        answer: "color"
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
