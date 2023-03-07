let secretNumber = randint(1,10);
let input = document.querySelector("#txt")
let attempt = 3;
document.querySelector("#bodyy").style.backgroundColor = "grey"
document.querySelector("#check").onclick=function(){
    let inputtxt = input.value
    if (inputtxt > secretNumber){
        document.querySelector("#hint").innerHTML = "Your number is too big"
    }
    if (inputtxt < secretNumber){
        document.querySelector("#hint").innerHTML = "Your number is too small"
    }
    if (inputtxt == secretNumber){
        document.querySelector("#hint").innerHTML = "You win!"
        input.disabled=true;
        document.querySelector("#check").disabled=true;
        document.querySelector("#wintxt").innerHTML = "You win!"
        document.querySelector("#bodyy").style.backgroundColor = "lightBlue"
    }

    input.value = ""
    input.focus()
    attempt--
    document.querySelector("#attempts").innerHTML=attempt
    if(attempt==0){
        input.disabled=true;
        document.querySelector("#check").disabled=true;
        document.querySelector("#bodyy").style.backgroundColor = "red"

    }
    if (inputtxt == secretNumber && attempt == 0){
        document.querySelector("#hint").innerHTML = "You win!"
        input.disabled=true;
        document.querySelector("#check").disabled=true;
        document.querySelector("#wintxt").innerHTML = "You win!"
        document.querySelector("#bodyy").style.backgroundColor = "lightBlue"
    }
    }
document.querySelector("#newgame").onclick = function(){
    document.querySelector("#check").disabled = false;
    input.disabled = false;
    secretNumber = randint(1,10);
    attempt = 3;
    document.querySelector("#hint").innerHTML = "hint here";
    document.querySelector("#attempts").innerHTML = "3";
    document.querySelector("#bodyy").style.backgroundColor = "grey"
    document.querySelector("#wintxt").innerHTML = " "
}
function randint(min, max){
return Math.floor(Math.random()*(max-min+1))+min
}