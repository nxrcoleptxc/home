let turns = 1
let charecter = "X"
let area = [["*", "*", "*"],
           ["*", "*", "*"],
           ["*", "*", "*"]]
           console.log(area)
function newGame(){
 let rows = document.querySelectorAll("tr")
    for(let i = 0; i < rows.length; i++){
      let row = rows[i]
      let cells = row.querySelectorAll("td")
      for(let j = 0; j < cells.length; j++){
        cells[j].classList.remove("crosses")
        cells [j].classList.remove("zeros")
        cells[j].innerHTML = ""
        area[i][j] = ""
    }
   }
   turns = 1
   charecter = "X"
   document.querySelector("span").innerHTML = charecter
}
document.querySelector("table").onclick = function(){
    let cell = event.target
    let row = cell.parentElement.rowIndex
    let column = cell.cellIndex
    if(area[row][column] != "X" && area[row][column] != "O"){
    area[row][column] = charecter;
    console.dir(cell)
    cell.innerHTML = charecter
    if(charecter === "X"){
        cell.classList.add("crosses");
    }else if(charecter === "O"){
        cell.classList.add("zeros");
    }
    if(checkwinner() === "X"){
        alert("X wins!")
    }
    if(checkwinner() === "O"){
        alert("O wins!")
    }
    turns += 1
    changeCharecter()
}

}
function changeCharecter(){
    if(turns % 2 == 1){
        charecter = "X"
    }else{
      charecter = "O"
    }
    document.querySelector("span").innerHTML = charecter
    }
 function checkwinner(){
     if(area[0][0] == "X" && area[0][1] == "X" && area [0][2]=="X"){
         return "X"
     }
     if(area[1][0] == "X" && area[1][1] == "X" && area [1][2]=="X"){
         return "X"
     }
     if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {
         return "X";
       }
       if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {
         return "X";
       }
       if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {
         return "X";
       }
       if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {
         return "X";
       }
       if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {
         return "X";
       }
       if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {
         return "X";
       }
  
     if(area[0][0] == "O" && area[0][1] == "O" && area [0][2]=="O"){
         return "O"
     }
     if(area[1][0] == "O" && area[1][1] == "O" && area [1][2]=="O"){
         return "O"
     }
     if (area[2][0] == "O" && area[2][1] == "O" && area[2][2] == "O") {
         return "O";
       }
       if (area[0][0] == "O" && area[1][0] == "O" && area[2][0] == "O") {
         return "O";
       }
       if (area[0][1] == "O" && area[1][1] == "O" && area[2][1] == "O") {
         return "O";
       }
       if (area[0][2] == "O" && area[1][2] == "O" && area[2][2] == "O") {
         return "O";
       }
       if (area[0][0] == "O" && area[1][1] == "O" && area[2][2] == "O") {
         return "O";
       }
       if (area[0][2] == "O" && area[1][1] == "O" && area[2][0] == "O") {
         return "O";
       }
     return false;
 }































