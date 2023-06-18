const startGameButton = document.querySelector(".start-quiz") // criar una variable para empezar el juego
const questionsContainer = document.querySelector(".questions-container") // coger la div que tenga la class container 
const answers = document .querySelector(".answers") // remove los hijos que esta div pueda tener 
const questionSpan = document.querySelector(".question") // vamos coger la class span del html 
const nextQuestionButton = document.querySelector(".next-question") // una class y hacer que el botón funcione para ir a la siguiente pregunta

startGameButton.addEventListener("click", startGame) // capturar el evento click para empezar el juego
nextQuestionButton.addEventListener("click", displayNextquestion) // hacer que la siguiente pregunta aparezca en la pantalla

let currentQuestion = 0; // criamos una variable auxilar para saber en cual preguntas estamos

function startGame() {
    startGameButton.classList.add("hide") // added a class hide para que el button pueda desaparecer
    questionsContainer.classList.remove("hide") // added el remove para que la div pueda reaparecer
    displayNextquestion() // una función para que pueda mostrar la siguiente pregunta
}


function displayNextquestion() { // esta función es para apresentar la proxima question 
    while(answers.firstChild) { // Para remover el primero hijo del elemento padre que seria el answers
      answers.removeChild(answers.firstChild) // Nos gustaria remover el primero hijo del elemento padre

    } 

    document.body.removeAttribute("class") // usaremos el método eliminar atributo para restablecer y comenzar con el color normal
    nextQuestionButton.classList.add("hide") // Hacer que el botón de siguiente pregunta solo aparezca cuando seleccionamos la respuesta

    questionSpan.textContent = questions[currentQuestion].question // aqui vamos coger la primera pregunta 
    questions[currentQuestion].answers.forEach(answer => {  // esa función flecha es para acceder a las respuestas de la prugunta 1
       const newAnswer = document.createElement("button")   // criar un elemento button para cada una das posibles respuestas 
       newAnswer.classList.add("button", "answer")  // added las dos class que estan dentro de la div answers
       newAnswer.textContent = answer.text // added las answer que estan dentro de la función con el forEach
       if (answer.correct) {
         newAnswer.dataset.correct = answer.correct // added la info en el button en caso de la respuestas sea la correcta 

       }

       answers.appendChild(newAnswer) // added un nuevo elemento con el appendChild , added elemento hijo (newAnswer)
       
       newAnswer.addEventListener ("click", selectAnswerCorrect) // Comprobar si el user eligió la respuesta correcta, vamos criar una función
    } )
}

    function selectAnswerCorrect (e) {  // Cuando tenemos un evento del tipo addEventListener y temos la función selectAnswerCorrect podemos tener el parametro del tipo evento.
        const answerClicked = e.target
        if (answerClicked.dataset.correct) {  // Si el botón en el que hizo clic tiene el dataSet, entonces su respuesta es correcta.
        document.body.classList.add("correct") // si la respuesta esta correcta, que se quede en color verde 
        } else {  
        document.body.classList.add("incorrect") // si la respuesta esta incorrecta, que se quede en color rojo
        }

    document.querySelectorAll(".answer").forEach(button => {
       if (button.dataset.correct) {
       button.classList.add("correct") // Si la respuesta es correcta, notifique la respuesta en verde
       } else {
       button.classList.add("incorrect") // Si la respuesta es incorrecta, notifique la respuesta en rojo 
       }
       button.disabled = true; // El user puede selecionar la respuesta apenas una vez
    })

    nextQuestionButton.classList.remove("hide")
    currentQuestion++

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

 













