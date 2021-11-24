const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerElem = document.getElementById('question-container');
const questionElem = document.getElementById('question');
const answerBtnsElem = document.getElementById('answer-buttons');
const restartBtnElem = document.getElementById('restart-btn');
const displayText = document.getElementById('display-text');

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
    clearStatusClass(document.body);
    hideNextBtn();
    showQuestion(myQuestions[currentQuestionIndex]);
    currentQuestionIndex++; 
    displayText.innerText = "";
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
        button.addEventListener('click', () => selectAnswer(answer));
        answerBtnsElem.appendChild(button)});
}

function hideNextBtn() {
    nextBtn.classList.add('hide');
}

function selectAnswer(answer) {
    //set background style based on the answer
    setStatusClass(document.body, answer.correct);
    displayText.innerText = answer.message;
    //show the next button only if the answer is correct
    if (answer.correct) {
        nextBtn.classList.remove('hide');
    } 
    //make a restart btn 
    if(currentQuestionIndex === myQuestions.length) {
        hideNextBtn()
        startBtn.innerText = "Take the Quiz Again";
        startBtn.classList.remove('hide');
    }
};


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
        question: "Why am I applying for FAC?",
        answers: [
            { 
                text: "I want to learn from my peers and teach them, too. After all, we can all teach each other new things, without having 5+ years of experience under our belt.",
                message: "Yes, that's the first reason!",
                correct: true
            },
            { 
                text: " I am a pro and already know everything. Actually, I changed my mind, I won’t apply for this course. Bye!", 
                message: "Hmmm... not really!",
                correct: false 
            }
        ]
    },
    {
        question: "Another reason I'm applying for FAC?",
        answers: [
            { 
                text: "I want to work in a group just to show everyone the right way to code.", 
                message: "That sounds like a terrible plan, don't you think?",
                correct: false
            },
            { 
                text: "By working with others in the programme, I want to learn how to share my ideas efficiently, present them clearly and concisely while being a good listener.", 
                message: "That's right!",
                correct: true
            }, 
        ]
    },
    {
        question: "That's pretty obvious but I'm applying because...",
        answers: [
            { 
                text: "I want to be a web developer! I want to create technology that solves users’ problems. Technology that’s meaningful, accessible, positive, and helpful.",
                message: "Of course!",
                correct: true 
            },
            { 
                text: "my goal is to create a ransomware and make lots of ₿₿₿!", 
                message: "Do I need a bitcoin bank account for that?",
                correct: false 
            }
        ]
    },
    {
        question: "Yes, we got that. But still, why FAC?",
        answers: [
            { 
                text: "I want to be a good ally to those who are under-represented in tech. What if the future of the tech industry is in the hands of tech employees with a fresh pair of eyes?", 
                correct: true},
            { 
                text: "I recognise that the tech industry has a long-standing diversity and inclusion issue. My goal is to be part of the change I want to see.", 
                correct: true}
        ]
    }
]
