// window.alert('Hello')
// window.alert("Let us play a game!")
// window.alert("wait that sounds creepy, not on some Saw shit this is just a simple trivia game project. nothing bad will happen I promise.")
// let consent = window.prompt("If you win, there is a sizable cash prize. Wanna play?"
// if(consent != 'yes' && "Yes" && "YES") {
//     window.alert("bummer...:(")
// }
// document.body.querySelector('h2')


let element
const score = 0 
var buttonsClicked = [false, false]

 function buttonClicked(button){
    buttonsClicked[button] = true;
    question1()
}

function Reset(){
    element = document.getElementsByClassName("reset");
    element[0].addEventListener('click', function(){
        window.location.reload();
    })
}


function question1(){
    if(buttonsClicked[0] == true){
        document.getElementsByClassName("btn1")[0].style.backgroundColor = 'green'
        
    } else if (buttonsClicked[1] == true){
        document.getElementsByClassName("btn2")[0].style.backgroundColor = 'red'
    }
}

// function runaway(){
//     element = document.getElementsByClassName('Runaway');
//     element[0].addEventListener('click', function(){
//       let run = document.createElement('h1');
//         run[0].innerHTML = 'You cant just save and quit from reality. You do not get to pause this. Time does not care for your schedule or desires at all. Nor do I.'
//             document.body.container.append(run)
//     })
// }
// runaway()

// function Forfeit(){
//     let reset= document.nav.ul.li.getElementsByClassName('surrender')
//     reset.addEventListener('click', function(){
//         element.body.innerHTML.append('I do not blame you. The burdens of existence are often too much to bear. If this is you true and honest choice I will not patronize you. Are you certain you would like to end it all?')
//     })
// }
// Reset()

// function updateScore(){
//     if button pressed = correct
//     document.body.button.style.backgroundColor = 'green'
//     score = score + 1
//     let scoreBoard = document.body.getElementsByClassName('score')
//     scoreBoard.innerHTML.append(score)
    
//     return score
// }

// function newQuestion(){
//     document.body.button.style.backgroundColor = 'white'
//     element = document.body.getElementsByTagName('h3')
//     element.innerHTML.append(question[]++)
// }

// questions = [
// waht is the capital of Burkina Faso? (Ouagadougou)
// who is the first person to win two Nobel Prizes? (Marie Curie)
// What country did the United States invade following the September 11th attacks? (Afghanistan)
// how much is a human life worth? (any/every answer correct)
// What is the Earliest literate civilization in human history? (Mesopotamia)
// What one piece character said "Justice will prevail you say? But of course it will, Whoever wins (this war) becomes justice"? (Donquixote Doflamingo)
// Are you a good person? (No)
// Is it better to live as a kind and rightous slave to wretched men, or a cruel and callous deviant against those same men?
// what is the square root of 987654321? (31426.9680529)
// Do you ignore any evils?
// Are you better than others? 
// Is one responsible for the sins of those you support?
// where in the human body does oxygenation of the blood occur? (Alveoli)
// Who is the patron deity of the United States(money)
// Is your life worth it? What of those that you know suffer greater? 
// Isnt it easy to rationalize excuses?
// Are you a good being? 
// Of course you think so. ]

Reset()
question1()