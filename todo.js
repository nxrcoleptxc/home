let input = document.querySelector("input")
let ul = document.querySelector("ul")
let finish = document.querySelector(".finish")
let clear = document.querySelector(".clear")
input.onkeypress = function(event){
    if(event.keyCode === 13){
        console.log("enter")
        let li = document.createElement("li")
        let span  = document.createElement("span")
        let img = document.createElement("img")
        span.innerHTML = input.value
        img.setAttribute("src", "file:///C:/Users/rahaa/OneDrive/Desktop/desktop/javascript/home/garbage.svg")

        li.appendChild(img)
        li.appendChild(span)

        // li.innerHTML = input.value
        ul.appendChild(li)
        input.value = ""
    }
}
ul.onclick = function(event){
    let target = event.target
    if(target.tagName === "LI"|| target.tagName == "SPAN"){
        target.classList.toggle("checked");
    }else if(target.tagName ==="IMG"){
        target.parentElement.remove();
    }
}

clear.onclick = function(){
    ul.innerHTML = ""
}

document.querySelector(".finish").onclick = function(){
    let check = ul.querySelectorAll("li");
    for(let i = 0; check < ul.length; i++){
        check[i].classList.add("checked")
    }
}