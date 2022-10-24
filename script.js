
var forfeiture = false
var correctBtn
let element
var i = 0
var score = 0 
var buttonsClicked = [false, false, false, false]
var question = questions[i];

 function buttonClicked(button){
    buttonsClicked[button] = true;
    validateQuestion(button);
    newQuestion();
    forfeitureCheck();
    toneShift();
}


function validateQuestion(button){
    if(buttonsClicked[button] == true && button == correctBtn){
        document.getElementsByClassName('responseBtns')[0].style.backgroundColor = 'green';
        updateScore(button);
    } else {
        document.getElementsByClassName('responseBtns')[0].style.backgroundColor = 'red';
}
i++;
button = false;
return button;
}

function updateScore(button){
    let scoreBoard = document.getElementsByTagName('h2')[0];
        score = score + 1;
            scoreBoard.innerHTML = score;
    return score;
}

function newQuestion(){
    question = questions[i];
    document.getElementsByTagName('h3')[0].textContent = question.text;
    getRandomButton();
    return correctBtn;
    return question;
}

 function getRandomButton() {
  let num = Math.floor(Math.random() * 4);
  switch(num) {
    case 0:
        document.getElementsByClassName('btn1')[0].innerHTML = question.answer;
                document.getElementsByClassName('btn2')[0].innerHTML = question.op1;
                    document.getElementsByClassName('btn3')[0].innerHTML = question.op2;
                        document.getElementsByClassName('btn4')[0].innerHTML = question.op3;
                            correctBtn = 0;

        break;

    case 1: 
        document.getElementsByClassName('btn1')[0].innerHTML = question.op1;  
            document.getElementsByClassName('btn2')[0].innerHTML = question.answer;
                document.getElementsByClassName('btn3')[0].innerHTML = question.op2;
                    document.getElementsByClassName('btn4')[0].innerHTML = question.op3;
                        correctBtn = 1;
        break;
  
    case 2:       
        document.getElementsByClassName('btn1')[0].innerHTML = question.op1;
            document.getElementsByClassName('btn2')[0].innerHTML = question.op2;
                document.getElementsByClassName('btn3')[0].innerHTML = question.answer;
                    document.getElementsByClassName('btn4')[0].innerHTML = question.op3;
                        correctBtn = 2;
        break;
  
    case 3:
            document.getElementsByClassName('btn1')[0].innerHTML = question.op1;
                document.getElementsByClassName('btn3')[0].innerHTML = question.op2;
                    document.getElementsByClassName('btn2')[0].innerHTML = question.op3;
                        document.getElementsByClassName('btn4')[0].innerHTML = question.answer;
                            correctBtn = 3;
  }
  return correctBtn
 }

 function Reset(){
    element = document.getElementsByClassName("reset");
    element[0].addEventListener('click', function(){
        window.location.reload();
    })
}

function runaway(){
    element = document.getElementsByClassName('Runaway');
    element[0].addEventListener('click', function(){
      window.alert('You cant just save and quit from reality. You do not get to pause this. Time does not care for your schedule or desires at all. Nor do I.')
            
    })
}

 function Forfeit(){
    element = document.getElementsByClassName('surrender');
    element[0].addEventListener('click', function(){
        document.getElementsByTagName('h3')[0].textContent = 'I do not blame you. The burdens of existence are often too much to bear. If this is your true and honest choice I will not patronize you. Are you certain you would like to end it all?';
            document.getElementsByClassName('btn1')[0].innerHTML = 'Yes';
                document.getElementsByClassName('btn2')[0].innerHTML = 'No';
                    document.getElementsByClassName('btn3')[0].innerHTML = "heck no";
                        document.getElementsByClassName('btn4')[0].innerHTML = "mama aint raise no punk";
                                forfeiture = true;
    })
    return forfeiture
}

function forfeitureCheck(){
    if (forfeiture != false){
        forfeitChoice()
    }
}


function forfeitChoice(){
        if(buttonsClicked[0] == true){
            document.getElementsByClassName("responseBtns")[0].style.backgroundColor = 'red';
            window.location.replace('https://www.youtube.com/watch?v=J7GY1Xg6X20');
        } else if (buttonsClicked[1] == true || buttonsClicked[2] == true || buttonsClicked[3] == true) {   
            document.getElementsByClassName("responseBtns")[0].style.backgroundColor = 'green';
            window.alert('nice');
            window.alert('I know it can get hard, but the struggle to be is noble. You are noble. Never doubt that, so long as you try.');
            newQuestion()
        }
        forfeiture = false;
        return forfeiture;
    }

 function toneShift(){
    if (i >= 9) {
        document.body.style.backgroundColor = 'black';
        document.getElementsByClassName('mainScreen')[0].style.backgroundColor = '#696f70';
            document.body.style.color = 'white';
                    document.getElementsByClassName('btn1')[0].style.backgroundColor = 'white';
                        document.getElementsByClassName('btn2')[0].style.backgroundColor = 'white';
                            document.getElementsByClassName('btn3')[0].style.backgroundColor = "white";
                                document.getElementsByClassName('btn4')[0].style.backgroundColor = "white";
                           
    }
 }

 function ending(){
    if(i > questions.length){
        window.alert('Was it fun for you?');
        window.alert('As is often partronizingly said, Ignorance is bliss.');
        window.location.reload;
        // document.getElementsByTagName('h3')[0].textContent = 'Was it fun for you?';
        //     document.getElementsByClassName('btn1')[0].innerHTML = 'Ignorance';
        //         document.getElementsByClassName('btn2')[0].innerHTML = 'Is';
        //             document.getElementsByClassName('btn3')[0].innerHTML = "Bliss";
        //                 document.getElementsByClassName('btn4')[0].innerHTML = "</3";
    }
 }

newQuestion()
Reset()
runaway()
Forfeit()
