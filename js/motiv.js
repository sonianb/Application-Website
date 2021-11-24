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
        question: "Why am I applying for FAC?",
        answers: [
            { text: "I want to learn from my peers and teach them, too. After all, we can all teach each other new things, without having 5+ years of experience under our belt.", correct: true },
            { text: " I am a pro and already know everything. Actually, I changed my mind, I won’t apply for this course. Bye!", correct: false },
            //if correct: That's the first reason!
            //if wrong: Hmm... Not really!
        ],
    },
    {
        question: "Another reason I'm applying for FAC?",
        answers: [
            { text: "I want to work in a group just to show everyone the right way to code.", correct: false },
            { text: "By working with others in the programme, I want to learn how to share my ideas efficiently, present them clearly and concisely while being a good listener.", correct: true}
            //if correct: That's right!
            //wrong: That sounds like a terrible plan, don't you think?
        ]
    },
    {
        question: "That's pretty obvious but I'm applying because...",
        answers: [
            { text: "I want to be a web developer! I want to create technology that solves users’ problems. Technology that’s meaningful, accessible, positive, and helpful." 
                , correct: true },
            { text: "my goal is to create a ransomware and make lots of ₿₿₿!", correct: false }
        ]
        //if correct: Of course! 
        //wrong: Do I need a bitcoin bank account for that?
    },
    {
        question: "Yes, we got that. But still, why FAC?",
        answers: [
            { text: "I want to be a good ally to those who are under-represented in tech. What if the future of the tech industry is in the hands of tech employees with a fresh pair of eyes?", correct: true },
            { text: "I recognise that the tech industry has a long-standing diversity and inclusion issue. My goal is to be part of the change I want to see.", correct: true}
        ]
    }
]

// Things to work on:
// - display a message after the user clicks on the answer 
// - create a "restart" btnat  the last question 