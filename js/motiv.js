const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerElem = document.getElementById('question-container');
const questionElem = document.getElementById('question');
const answerBtnsElem = document.getElementById('answer-buttons');

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    //display the question container 
    questionContainerElem.classList.remove('hide');
    //get the first question from the myQuestions arr
    showQuestion(myQuestions[0]);
}

nextBtn.addEventListener('click', () => setNextQuestion())
    //show the rest of the questions
let currentQuestionIndex = 0;
function setNextQuestion() {
    hideNextBtn();
    currentQuestionIndex++;
    showQuestion(myQuestions[currentQuestionIndex]);
}



function showQuestion(question) {
    questionElem.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        //set the text inside the btn
        button.innerText = answer.text;
        //apply the styling
        button.classList.add('quiz-btns');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerBtnsElem.appendChild(button);
    });
}

function hideNextBtn() {
    nextBtn.classList.add('hide')
}

function selectAnswer(correct) {
    setStatusClass(document.body, correct);
    nextBtn.classList.remove('hide');
}

//apply background styling based on the answer
function setStatusClass(elem, correct) {
    clearStatusClass(elem); 
    if(correct) {
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
            {text: "4", correct: true},
            {text: "22", correct: false}, 
            {text: "33",correct: false}
        ]
    },
    {
        question: "What is 5+2??",
        answers: [
            { text: "7", correct: true},
            {text: "22", correct: false}
        ]
    }, 
    {
        question: "What is 9+2??",
        answers: [
            { text: "92", correct: false},
            {text: "11", correct: true}
        ]
    },
    {
        question: "What is 8+2??",
        answers: [
            { text: "10", correct: true},
            {text: "22", correct: false}
        ]
    }
]

// Things to work on:
// - display a message after the user clicks on the answer 
// - remove the elements that add up when I click the "next" btn
//display a message for the last question