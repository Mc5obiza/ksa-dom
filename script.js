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
    span.addEventListener("click",()=>{
        li.classList.toggle("done")
    })
    const delbtn = document.createElement("button")
    delbtn.addEventListener("click",()=>{
        li.remove()
    })
    delbtn.innerText = "Delete"
    li.appendChild(span) //adds
    li.appendChild(delbtn)
    list.appendChild(li)
    
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

const input = document.getElementById("taskInput")
const addbtn = document.getElementById("addBtn")
const message = document.getElementById("message")
function handleAdd(){
    const text = input.value.trim()
    if (!text){
        message.innerText = "Please Try something first!!"
        return;
    } 
    addTasktoPage(text)
    if (message){
        message.innerText= ""
    }
    input.value = ""
}

addbtn.addEventListener("click",handleAdd)
input.addEventListener("keydown",(e)=>{
    if (e.key == "Enter"){
        handleAdd()
    }
})

