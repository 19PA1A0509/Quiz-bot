// giving variables 
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
// structure of quiz questions to display 
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
// function to display one question at a time and it's question number
function loadQuestion(questionIndex) {

    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
};
// funtion to display next question after clicking the answer
function displaynextquestion() {
    var selctedOption = document.querySelector('input[type=radio]:checked');
    // the player cannot go to next question until he chooses an option
    if (!selctedOption) {
        alert('please select your answer!');
        return;
    }
    var answer = selctedOption.value;
    // if correct, score increases and if wrong an alert message displays the correct answer
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    } else {
        alert("Oops!! It's a wrong answer...The coorect answer is: option" + questions[currentQuestion].answer)
    }
    selctedOption.checked = false;
    currentQuestion++;
    // if last question is displayed we get the finish button
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    // after last question the score will be displayed
    if (currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
// the first question should be called manually
loadQuestion(currentQuestion)