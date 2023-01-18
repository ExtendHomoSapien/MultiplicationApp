const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questionEl = document.getElementById("question")
const scoreEl = document.getElementById("score")
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input")

let score = +(localStorage.getItem("userScore") | 0);


scoreEl.innerText = `Score: ${score}`
questionEl.innerText = `What is ${num1} x ${num2}`

const correctSolution = num1 * num2;

formEl.addEventListener("submit", () =>{
    //input value cast to number
    const userSolution = +inputEl.value
    if(correctSolution === userSolution){
        //increase score
        score++
    } else {
        score--
    }
    console.log(score);
    updateLocalStorage()

})

function updateLocalStorage(){
    localStorage.setItem("userScore", JSON.stringify(score))
}