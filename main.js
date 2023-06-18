const startGameButton = document.querySelector(".start-quiz") // criar una variable para empezar el juego
const questionsContainer = document.querySelector(".questions-container") // coger la div que tenga la class container 
const answers = document .querySelector(".answers") // remove los hijos que esta div pueda tener 


startGameButton.addEventListener("click", startGame) // capturar el evento click para empezar el juego

function startGame() {
    startGameButton.classList.add("hide") // added a class hide para que el button pueda desaparecer
    questionsContainer.classList.remove("hide") // added el remove para que la div pueda reaparecer
    displayNextquestion() // una función para que pueda mostrar la siguiente pregunta
}


function displayNextquestion() { // esta función es para apresentar la proxima question 
    while(answers.firstChild) { // Para remover el primero hijo del elemento padre que seria el answers
      answers.removeChild(answers.firstChild) // Nos gustaria remover el primero hijo del elemento padre

    } 

}

const questions = [                                                      // criamos una variable questions de tipo array 
    {
        question: "Dentro de qual elemnto HTML colocamos o JavaScript?", // propiedad question que es la propia pregunta 
        answers: [                                                       // propiedad answer que es un array con las posibles respuestas
            { text: "<javascript>", correct: false },                    // cada respuesta teines una propiedad correct que nos indica true o false
            { text: "<js>", correct: false },
            { text: "<script>", correct: true },
            { text: "<scripting>", correct: false }
        ]

    },

 ]













