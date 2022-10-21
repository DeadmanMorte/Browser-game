// window.alert('Hello')
// window.alert("Let us play a game!")
// window.alert("wait that sounds creepy, not on some Saw shit this is just a simple trivia game project. nothing bad will happen I promise.")
// let consent = window.prompt("If you win, there is a sizable cash prize. Wanna play?"
// if(consent != 'yes' && "Yes" && "YES") {
//     window.alert("bummer...:(")
// }
// document.body.querySelector('h2')

var correctBtn
let element
var i = 0
const score = 0 
var buttonsClicked = [false, false, false, false]
var question = questions[i]

 function buttonClicked(button){
    buttonsClicked[button] = true;
    validateQuestion(button)
}


function validateQuestion(button){
    if(buttonsClicked[button] == true && button == correctBtn){
        document.getElementsByClassName('responseBtns')[0].style.backgroundColor = 'green'
        console.log('booty')
    } else 
        document.getElementsByClassName('responseBtns')[0].style.backgroundColor = 'red'
        console.log('titty')
    // newQuestion()
}

// function updateScore(){
//     if button pressed = correct
//     document.body.button.style.backgroundColor = 'green'
//     score = score + 1
//     let scoreBoard = document.body.getElementsByClassName('score')
//     scoreBoard.innerHTML.append(score)
    
//     return score
// }

function newQuestion(){
    document.getElementsByTagName('h3')[0].textContent = question.text;
    getRandomButton();
    return correctBtn
    i++;
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
                        document.getElementsByClassName('btn4')[0].innerHTML = "mama aint raise no punk"
    })
}

function forfeitChoice(){
    if(buttonsClicked[0] == true){
        document.getElementsByClassName("btn1")[0].style.backgroundColor = 'red';
        // perhaps crash the site?
    } if( buttonsClicked[1,2,3] == true){
        window.alert('nice');
        window.alert('I know it can get hard, but the struggle to be is noble. You are noble. Never doubt that, so long as you try.');
        newQuestion()
    }
}
newQuestion()
Reset()
runaway()
Forfeit()
