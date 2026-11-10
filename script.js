const title = document.getElementById("title")
const greeting = document.getElementById("greeting")
const list = document.getElementById("tasklist")
const elements = document.getElementsByClassName("elemetn")


console.log(title)


const today = new Date().toDateString()

greeting.innerText = "Hi Ranah Salah! Today is"+today
title.style.color = "#3b6fd4"

starterTasks = ["Learn DOM","Build TaskBuddy","Show off"]

function addTasktoPage(text){
    const li = document.createElement("li") // Creates
    const span = document.createElement("span")

    span.innerText = text
    li.appendChild(span) //adds
    list.appendChild(li)
    span.addEventListener("click",()=>{
        li.classList.toggle("done")
    })
}
for(let i =0 ;i<starterTasks.length;i++){
    // list.innerHTML +="<li><span>"+starterTasks[i]+"</span></li>"
    addTasktoPage(starterTasks[i])
}

const themeBtn = document.getElementById("themeBtn")
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")){
        themeBtn.innerText = "Dark Mode"
    }
    else{
        themeBtn.innerText = "Light Mode"
    }
})