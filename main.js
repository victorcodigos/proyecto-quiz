// https://opentdb.com/api.php?amount=1 question from here, I selected one by one because 10 by 10 is too confusing

const startGameButton = document.querySelector(".start-quiz") 
const questionsContainer = document.querySelector(".questions-container") 
const answers = document.querySelector(".answers") 
const questionSpan = document.querySelector(".question") 
const nextQuestionButton = document.querySelector(".next-question") 

const formXp = document.getElementById("formXp");
const submit = document.getElementById("submit");
const start = document.getElementById("start");
const neighbor = document.getElementById("neighbor");
const ask = document.getElementById("ask");
const container = document.getElementById("container");



// preguntas from the API 

const startingQuestions = () => {
    axios
        .get("https://opentdb.com/api.php?amount=50&category=21&difficulty=medium&type=multiple")
        .then(res => {
            const api = res.data.results;
            console.log(api);
            showAllTheQuestions(api);
        })
        .catch(error => console.error(error))
}

startingQuestions();



startGameButton.addEventListener("click", startGame) 
nextQuestionButton.addEventListener("click", displayNextquestion) 



let currentQuestion = 0; 
let totalTheAnswerCorrect = 0; 

function startGame() {
    startGameButton.classList.add("hide") 
    questionsContainer.classList.remove("hide") 
    displayNextquestion()
}


function displayNextquestion() { 
    resetAll()

    if (questions.length == currentQuestion) {
        return finishTheQuiz() 
    }

    questionSpan.textContent = questions[currentQuestion].question 
    questions[currentQuestion].answers.forEach(answer => {  
        const newAnswer = document.createElement("button")   
        newAnswer.classList.add("button", "answer") 
        newAnswer.textContent = answer.text 
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct 

        }

        answers.appendChild(newAnswer) 

        newAnswer.addEventListener("click", selectAnswerCorrect) 
    })
} 

function resetAll() {
    while (answers.firstChild) { 
        answers.removeChild(answers.firstChild) 

    }
 
    document.body.removeAttribute("class") 
    nextQuestionButton.classList.add("hide") 

}

function selectAnswerCorrect(e) {  
    const answerClicked = e.target
    if (answerClicked.dataset.correct) {  
        document.body.classList.add("correct") 
        totalTheAnswerCorrect++ 
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct") 
        } else {
            button.classList.add("incorrect") 
        }
        button.disabled = true;
    })

    nextQuestionButton.classList.remove("hide")
    currentQuestion++

}

function finishTheQuiz() {
    const totalQuestion = questions.length
    const totalHits = Math.floor(totalTheAnswerCorrect * 100 / totalQuestion);

    let message = ""

    switch (true) {
        case (totalHits >= 90):
            message = "Excelent :D you are very good on it."
            break
        case (totalHits >= 70):
            message = "Very good :) you just missed 3 questions!"
            break
        case (totalHits >= 50):
            message = "Good! You could be better! You hits half of the quiz!"
            break
        default:
            message = "Ops! I think you need to try it again! :("
    }

    questionsContainer.innerHTML =

        `
<p class= final-message>
   You hit ${totalTheAnswerCorrect} of ${totalQuestion} questions!
   <span> Results: ${message} </span>
</p>


<button onclick = window.location.reload() class= "button">
   Try it again! 
</button>

       `

}



/* criamos una variable questions de tipo array 
 propiedad question que es la propia pregunta 
 propiedad answer que es un array con las posibles respuestas
 cada respuesta teines una propiedad correct que nos indica true o false
*/



const questions = [
    {
        question: "If a 360 is one full rotation before shooting, how many rotations would a 1080 be?",
        answers: [
            { text: "<4>", correct: false },
            { text: "<3,5>", correct: false },
            { text: "<3>", correct: true },
            { text: "<5>", correct: false }
        ]

    },

    {
        question: "At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?",
        answers: [
            { text: "<Electric Company>", correct: true },
            { text: "<Water Works>", correct: false },
            { text: "<Chance>", correct: false },
            { text: "<Community Chest>", correct: false }
        ]

    },

    {
        question: "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
        answers: [
            { text: "<Fat Man>", correct: false },
            { text: "<Noah Ark>", correct: false },
            { text: "<Trojan Horse>", correct: false },
            { text: "<Spruce Goose>", correct: true }
        ]

    },


    {
        question: "Which of the following is the IATA code for Manchester Airport?",
        answers: [
            { text: "<EGLL>", correct: false },
            { text: "<MAN>", correct: true },
            { text: "<LHR>", correct: false },
            { text: "<EGCC>", correct: false }
        ]

    },

    {
        question: "Which musical artist had a prominent role in the 2017 film Kingsman: The Golden Circle?",
        answers: [
            { text: "<Lady Gaga>", correct: false },
            { text: "<Elton John>", correct: true },
            { text: "<Justin Bieber>", correct: false },
            { text: "<Rihanna>", correct: false }
        ]

    },

    {
        question: "How many episodes were in season five of Samurai Jack?",
        answers: [
            { text: "<12>", correct: false },
            { text: "<11>", correct: false },
            { text: "<10>", correct: true },
            { text: "<9>", correct: false }
        ]

    },

    {
        question: "Who starred as Bruce Wayne and Batman in Tim Burtonv in 1989 movie Batman?",
        answers: [
            { text: "<Michael Keaton>", correct: true },
            { text: "<George Clooney>", correct: false },
            { text: "<Val Kilmer>", correct: false },
            { text: "<Adam West>", correct: false }
        ]

    },

    {
        question: "Who led the Communist Revolution of Russia?",
        answers: [
            { text: "<Mikhail Gorbachev>", correct: false },
            { text: "<Vladimir Putin>", correct: false },
            { text: "<Joseph Stali>", correct: false },
            { text: "<Vladimir Lenin>", correct: true }
        ]

    },

    {
        question: "How many teeth does an adult rabbit have?",
        answers: [
            { text: "<26>", correct: false },
            { text: "<35>", correct: false },
            { text: "<28>", correct: true },
            { text: "<32>", correct: false }
        ]

    },

    {
        question: "What is the largest organ of the human body?",
        answers: [
            { text: "<Skin>", correct: true },
            { text: "<Heart>", correct: false },
            { text: "<arge Intestine>", correct: false },
            { text: "<Liver>", correct: false }
        ]

    },
]


