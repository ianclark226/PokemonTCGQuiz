var currentQuestion = 0;
var score = 0;
var TotalQuestions = 10;
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var secondsLeft = 100;
var checkmark = new Audio ();
checkmark.src = "checksound.mp3";
var wrong = new Audio ();
wrong.src = "wrongbuz.mp3";


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var highscoreButton = document.getElementById('hscore');
var gameoverCont = document.getElementById('gameover');
var restart = document.getElementById('restart');
var butn = document.getElementById('butn');
var butn3 = document.getElementById('butn3');
var standing = document.getElementById('standing');








function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        container.style.display = 'none';
        gameoverCont.style.display = '';
        gameoverCont.textContent='Times up!';
        
        
        return;
      }
        else if(currentQuestion == TotalQuestions) {
            clearInterval(timerInterval);
            gameoverCont.style.display = 'none';
        
      }
    
  
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = " ";
  

    mainEl.appendChild();
  
  }
  
  setTime();

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption) {
        alert('Select Answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 10;
        checkmark.play();
    } else {
            secondsLeft-=10; 
            wrong.play();
        
    }

  
    
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == TotalQuestions - 1) {
       
        nextButton.textContent = 'Finish';
    }

    if(currentQuestion == TotalQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        butn.textContent = ' Your Score: ' + score;
        timeEl.style.display='none';
        gameoverCont.style.display= 'none';
        highscoreButton.style.display = '';
        
        return;

    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

highscoreButton.addEventListener("click", function () {
    debugger
    resultCont.style.display = 'none';
    standing.style.display = '';
    // score=localStorage.getItem
    
   var scores = JSON.parse(localStorage.getItem('score'));
    if(!scores) {
        scores = {};
    }

    var name= document.getElementById('scorename').value;

    scores[name]=score;
    // localStorage.setItem("score", JSON.stringify(scores));

    var keys = Object.keys(scores);
    keys.forEach(data => {
        var ele = document.getElementById("standing")
        var t = data + " score: " + scores[data]
        ele.innerText = t;
        this.append.ele;
    })
    
});








