//document.getElementById("count-el"). innerText= 5  
//defining variables
// let count = 9 -9
// console.log(count)


// intialize the count as 0
// listen for clicks on variable when the button is clicked
//increment the count variable when the button is clicked (log it out)
//change the count-el in the html to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//let totalEl = document.getElementById("total-el")
let count = 0

//console.log(saveEl)


function increment(){
        count += 1
          countEl.textContent = count
          
}

function save(){
    let countStr = count + " - "

          saveEl.textContent += countStr
          countEl.textContent = 0
          count = 0 
         //console.log(count)
}


 