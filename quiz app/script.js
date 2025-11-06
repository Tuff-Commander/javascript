// Quiz questions
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["Python", "CSS", "Java", "PHP"],
        correct: 1
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Apple", "Netscape", "Google"],
        correct: 2
    },
    {
        question: "What is the correct syntax for referring to an external script?",
        options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "Both A and B", "#"],
        correct: 2
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"],
        correct: 0
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        options: ["parseInt()", "parseInteger()", "toInt()", "convertInt()"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Start quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
    showQuestion();
}

// Display current question
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = `Question ${currentQuestion + 1}: ${question.question}`;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('next-btn').disabled = true;
}

// Handle answer selection
function selectAnswer(index) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = index;
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, i) => {
        option.classList.add('disabled');
        if (i === question.correct) {
            option.classList.add('correct');
        }
        if (i === selectedAnswer && i !== question.correct) {
            option.classList.add('wrong');
        }
    });
    
    if (selectedAnswer === question.correct) {
        score++;
    }
    
    document.getElementById('next-btn').disabled = false;
}

// Move to next question
function nextQuestion() {
    currentQuestion++;
    selectedAnswer = null;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show final results
function showResults() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('score').textContent = `${score} / ${questions.length} (${percentage}%)`;
}

// Restart quiz
function restartQuiz() {
    startQuiz();
}

// Start quiz when page loads
startQuiz();