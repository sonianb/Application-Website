const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerElem = document.getElementById('question-container');
const questionElem = document.getElementById('question');
const answerBtnsElem = document.getElementById('answer-buttons');
const restartBtnElem = document.getElementById('restart-btn');

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    //display the question container 
    questionContainerElem.classList.remove('hide');
    //get the first question from the myQuestions arr
    showQuestion(myQuestions[0]);
}

nextBtn.addEventListener('click', () => setNextQuestion());

//show the rest of the questions
let currentQuestionIndex = 1;

function setNextQuestion() {
    hideNextBtn();
    showQuestion(myQuestions[currentQuestionIndex]);
    currentQuestionIndex++; 
}


function showQuestion(question) {
    questionElem.innerText = question.question;
    //hide previous answers
    answerBtnsElem.innerText = "";
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        //set the text inside the btn
        button.innerText = answer.text;
        //apply the styling
        button.classList.add('quiz-btns');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerBtnsElem.appendChild(button)});
}

function hideNextBtn() {
    nextBtn.classList.add('hide');
}

function selectAnswer(correct) {
    //set background style based on the answer
    setStatusClass(document.body, correct);
    //show the next button only if the answer is correct
    if (correct) {
        nextBtn.classList.remove('hide');
    } 
    //show restart btn 
    if(currentQuestionIndex === myQuestions.length) {
        hideNextBtn()
        restartBtnElem.classList.remove('hide');
    }
};


// restartBtnElem.addEventListener('click', showQuestion);


function setStatusClass(elem, correct) {
    clearStatusClass(elem);
    if (correct) {
        elem.classList.add('correct')
    } else {
        elem.classList.add('wrong')
    }
}

function clearStatusClass(elem) {
    elem.classList.remove('correct')
    elem.classList.remove('wrong')
}


// Create list of questions (an array of objects) 
const myQuestions = [
    {
        question: "What is 2+2??",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "33", correct: false }
        ],
    },
    {
        question: "Question 2 What is 5+2??",
        answers: [
            { text: "7", correct: true },
            { text: "22", correct: false }
        ]
    },
    {
        question: "Question 3 What is 9+2??",
        answers: [
            { text: "92", correct: false },
            { text: "11", correct: true }
        ]
    },
    {
        question: "Question 4 What is 8+2??",
        answers: [
            { text: "10", correct: true },
            { text: "22", correct: false }
        ]
    }
]

// Things to work on:
// - display a message after the user clicks on the answer 
// - create a "restart" btnat  the last question 