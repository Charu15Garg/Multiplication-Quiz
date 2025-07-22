// Generate random numbers between 0 to 10
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

// Display the generated number on the quiz page
const num1Element = document.getElementById('num1');
num1Element.innerText = num1;

const num2Element = document.getElementById('num2');
num2Element.innerText = num2;

/* Set the score to zero and display it on the quiz page */
let s = 0;
let scoreElement = document.getElementById("score");
scoreElement.innerText = s;
/* Change the score on the quiz page, reset the quiz and add new question */
function scoreChange() {
    // Get user input
    let userInput = parseInt(document.getElementById('userinput').value);
    // Evaluate correct answer
    let correctAnswer = num1 * num2;

    /* Compare correct answer with user input
    change the score and 
    update the score */
    if (correctAnswer === userInput) {
        s++;
        scoreElement.innerText = s;
    }
    else {
        s--;
        scoreElement.innerText = s;
    }

    /* Reset the values on quiz page and 
    generate new numbers for the question */
    document.getElementById('form').reset();
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    num1Element.innerText = num1;
    num2Element.innerText = num2;
};

// Access submit button 
const buttonElement = document.getElementById('button');

// Trigger scoreChange function when user clicks Submit Answer button
buttonElement.addEventListener('click', scoreChange);