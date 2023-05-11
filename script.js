const questions =[
    {
        question:" Who was the 32nd President of the United States? ",
        answers: [
            {text: "Franklin D. Roosevelt", correct: true},
            {text: "Roosevelt", correct: false},
            {text: "Franklin  Roosevelt", correct: false},
            {text: "Franklin D.", correct: false},

        ]
    },
    {
        question:" What nickname did the Western press give to members of the Fists of Righteous Harmony in China? ",
        answers: [
            {text: " Boss", correct: false},
            {text: "Bosy", correct: false},
            {text: "Boxers", correct: true},
            {text: "Bobby", correct: false},

        ]

    },
    {
        question:"Who was assassinated by her own bodyguards in 1984? ",
        answers: [
            {text: " Rahul Gandhi", correct: false},
            {text: "Rajiv Gandhi", correct: false},
            {text: "Indira Gandhi", correct: true},
            {text: "Rabita Gandhi", correct: false},

        ]

    },
    {
        question:"What day did the Battle of the Somme end? ",
        answers: [
            {text: " Nov 18, 1913", correct: false},
            {text: "Nov 18, 1914", correct: false},
            {text: "Nov 18, 1915", correct: false},
            {text: "Nov 18, 1916", correct: true},

        ]

    },
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "ture"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();