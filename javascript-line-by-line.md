# JavaScript line-by-line explanation for the TaskBuddy app

This file explains the code in [script.js](./script.js) in a simple, student-friendly way.

The program works with the HTML page, reads elements from the page, adds tasks, toggles theme mode, and shows how many tasks are left.

## 1) Getting elements from the page

```js
const title = document.getElementById("title")
const greeting = document.getElementById("greeting")
const list = document.getElementById("tasklist")
const elements = document.getElementsByClassName("elemetn")
```

- `document.getElementById(...)` finds an HTML element using its `id`.
- `title` stores the element with id `title`.
- `greeting` stores the element with id `greeting`.
- `list` stores the `ul` element with id `tasklist`.
- `elements` tries to find all elements with the class `elemetn`.
- Note: the class name is spelled `elemetn` (with a typo), so it may not match any real class in the HTML.

```js
console.log(title)
```

- Prints the `title` element in the browser console.
- This is only for testing; it helps check whether the element was found correctly.

## 2) Greeting message and page styling

```js
const today = new Date().toDateString()
```

- Creates a new Date object.
- `toDateString()` converts it to a readable date like `Thu Nov 12 2026`.
- This value is stored in `today`.

```js
greeting.innerText = "Hi Ranah Salah! Today is" + today
```

- `innerText` changes the text visible inside the `greeting` element.
- The message becomes:
  - `Hi Ranah Salah! Today is Thu Nov 12 2026`
- The plus sign `+` joins (concatenates) the string and the date.

```js
title.style.color = "#3b6fd4"
```

- Changes the text color of the `title` heading.
- `#3b6fd4` is a blue color code.

## 3) Default tasks array

```js
starterTasks = ["Learn DOM","Build TaskBuddy","Show off"]
```

- Creates an array called `starterTasks`.
- Arrays store multiple values in one variable.
- The values are strings:
  - `Learn DOM`
  - `Build TaskBuddy`
  - `Show off`
- In a cleaner version, this should normally be written as `const starterTasks = [...]`.

## 4) Function to add a task to the page

```js
function addTasktoPage(text){
```

- Declares a function named `addTasktoPage`.
- This function receives a parameter called `text`.
- The job of this function is to create a new task item and add it to the list.

```js
    const li = document.createElement("li") // Creates
```

- Creates a new HTML `<li>` element.
- `li` represents a list item.
- This item will later appear inside the `<ul id="tasklist">`.

```js
    const span = document.createElement("span")
```

- Creates a new `<span>` element.
- This is used to hold the task text.

```js
    span.innerText = text
```

- Sets the visible text of the `<span>` to the task value passed into the function.
- Example: if `text` is `"Read chapter 5"`, then the span shows that text.

```js
    span.addEventListener("click",()=>{
```

- Adds a click event listener to the task text.
- When the user clicks the task text, the code inside the arrow function runs.

```js
        li.classList.toggle("done")
```

- Adds or removes the `done` CSS class from the `li` element.
- If the task is not completed, it gets the class `done`.
- If it already has the class, it removes it.
- This is how the app marks a task as done or active.

```js
        refresh() //added here for functionality
```

- Calls the `refresh()` function.
- This updates the task counter and applies filters.

```js
    })
```

- Ends the click event handler.

```js
    const delbtn = document.createElement("button")
```

- Creates a new button element.
- This button will be used to delete the task.

```js
    delbtn.addEventListener("click",()=>{
```

- Adds a click listener to the delete button.
- When clicked, the code below runs.

```js
        li.remove()
```

- Removes the whole `li` item from the page.
- The task is deleted from the list.

```js
        refresh() //added here for functionality
```

- Updates the counter and filters after the task is removed.

```js
    })
```

- Ends the delete button event code.

```js
    delbtn.innerText = "Delete"
```

- Sets the button text to `Delete`.

```js
    li.appendChild(span) //adds
```

- Adds the text container (`span`) inside the list item (`li`).

```js
    li.appendChild(delbtn)
```

- Adds the delete button inside the same list item.

```js
    list.appendChild(li)
```

- Adds the full list item to the `<ul id="tasklist">`.
- This makes the task visible on the page.

```js
}
```

- Ends the function.

## 5) Add the starter tasks to the page

```js
for(let i =0 ;i<starterTasks.length;i++){
```

- Starts a `for` loop.
- `i` starts at `0`.
- The loop continues while `i` is smaller than the length of the array.
- After each loop, `i` increases by 1.

```js
    // list.innerHTML +="<li><span>"+starterTasks[i]+"</span></li>"
```

- This is a commented-out alternative approach.
- It shows another way to build the list using HTML strings.
- Because it begins with `//`, the browser ignores it.

```js
    addTasktoPage(starterTasks[i])
```

- Calls the `addTasktoPage` function for each item in the array.
- So the app adds the tasks:
  - `Learn DOM`
  - `Build TaskBuddy`
  - `Show off`

```js
}
```

- Ends the loop.

## 6) Theme button: dark mode / light mode

```js
const themeBtn = document.getElementById("themeBtn")
```

- Finds the button in the HTML with id `themeBtn`.

```js
themeBtn.addEventListener("click",()=>{
```

- Runs code when the theme button is clicked.

```js
    document.body.classList.toggle("dark")
```

- Toggles the CSS class `dark` on the `<body>` element.
- If the body has the class, it removes it; if not, it adds it.
- This is how the page switches between normal and dark mode.

```js
    if (document.body.classList.contains("dark")){
```

- Checks whether the body currently contains the class `dark`.

```js
        themeBtn.innerText = "Dark Mode"
```

- If dark mode is active, the button text becomes `Dark Mode`.

```js
    }
```

- Ends the `if` block.

```js
    else{
```

- Runs when dark mode is not active.

```js
        themeBtn.innerText = "Light Mode"
```

- Changes the button text to `Light Mode`.

```js
    }
```

- Ends the `else` block.

```js
})
```

- Ends the click event listener.

## 7) Add new task input and button

```js
const input = document.getElementById("taskInput")
const addbtn = document.getElementById("addBtn")
const message = document.getElementById("message")
```

- Gets the input box, the add button, and the message area from the page.

```js
function handleAdd(){
```

- Defines a function that handles adding a new task.

```js
    const text = input.value.trim()
```

- Reads the text entered by the user.
- `input.value` is the content typed in the input box.
- `.trim()` removes spaces before and after the text.
- Example: `"   Read book   "` becomes `"Read book"`.

```js
    if (!text){
```

- Checks whether the user entered nothing.
- If the text is empty, the condition is true.

```js
        message.innerText = "Please Try something first!!"
```

- Shows an error message in the message paragraph.
- It tells the user to enter a task before adding it.

```js
        return;
```

- Stops the function immediately.
- The task is not added when the input is empty.

```js
    } 
```

- Ends the `if` block.

```js
    addTasktoPage(text)
```

- Calls the `addTasktoPage` function with the new task text.
- This creates a new list item and shows it on the page.

```js
    if (message){
```

- Checks whether the message element exists.
- In this page it does exist.

```js
        message.innerText= ""
```

- Clears the warning message when a valid task is added.

```js
    }
```

- Ends the if block.

```js
    input.value = ""
```

- Clears the text field after adding the task.

```js
    refresh() //added here for functionality
```

- Updates the counter and filters after inserting the task.

```js
}
```

- Ends the `handleAdd` function.

## 8) Event listeners for the add button and Enter key

```js
addbtn.addEventListener("click",handleAdd)
```

- When the Add button is clicked, the `handleAdd` function runs.

```js
input.addEventListener("keydown",(e)=>{
```

- Adds an event listener to the input box.
- This listens for keyboard events.
- The parameter `e` stores the event information.

```js
    if (e.key == "Enter"){
```

- Checks whether the pressed key is Enter.

```js
        handleAdd()
```

- Calls the same add-task function when the user presses Enter.

```js
    }
```

- Ends the if block.

```js
})
```

- Ends the event listener.

## 9) Refresh function and task counter

```js
// refresh counter
const counter = document.getElementById("counter")
```

- Gets the HTML element with id `counter`.
- This is where the number of remaining tasks is displayed.

```js
function refresh(){
```

- Defines a function named `refresh`.
- Its purpose is to recompute the remaining tasks and apply all current filters.

```js
    const left = document.querySelectorAll("#tasklist li:not(.done)").length
```

- Uses CSS selectors to count all `<li>` items inside `#tasklist` that do not have the class `done`.
- `querySelectorAll(...)` returns a list of matching elements.
- `.length` gives the number of those elements.
- So `left` is the number of active tasks left.

```js
    counter.innerText = left + " task(s) left"
```

- Sets the counter text to show the remaining number.
- Example: `2 task(s) left`

```js
    applyfilter()
```

- Calls the filter function so the current filter is applied to the task list again.

```js
}
```

- Ends the `refresh` function.

## 10) Filters: All, Active, Done

```js
const filterDone = document.getElementById("filterdone")
const filterAll = document.getElementById("filterall")
const filterActive = document.getElementById("filteractive")
```

- Gets the three filter buttons from the HTML.

```js
current_filter = "all"
```

- Creates a variable called `current_filter`.
- It starts with the value `"all"`.
- This means the default view is to show every task.
- In a more professional script, this would usually be written with `const` or `let`.

```js
function applyfilter(){
```

- Defines the function that controls which tasks are visible.

```js
    const items = document.querySelectorAll("#tasklist li")
```

- Gets every list item inside the task list.

```js
    for (let i = 0;i<items.length;i++){
```

- Starts a loop through each task item.
- `i` starts at 0, and continues until it reaches the end of the list.

```js
        const isDone = items[i].classList.contains("done")
```

- Checks whether the current task item has the class `done`.
- If yes, it means the task is marked completed.

```js
        let show = true
```

- Creates a variable named `show`.
- It starts as `true`, meaning the task is visible by default.

```js
        if (current_filter == "active" && isDone){
```

- If the current filter is `active` and the task is done, then hide it.

```js
            show = false
```

- Sets `show` to false, so the item will be hidden.

```js
        }
```

- Ends the first `if` block.

```js
        if (current_filter == "done" && !isDone){
```

- If the current filter is `done` and the task is not done, hide it.

```js
            show = false
```

- Makes the task hidden.

```js
        }
```

- Ends the second `if` block.

```js
        if (show){
```

- This checks whether the task should stay visible.

```js
            items[i].classList.remove("hidden")
```

- Removes the `hidden` class if it is present.
- The item becomes visible again.

```js
        }
```

- Ends the first visibility check.

```js
        else{
```

- Runs when `show` is false.

```js
            items[i].classList.add("hidden")
```

- Adds the `hidden` class to the task item.
- This hides it from the page.

```js
        }
```

- Ends the `else` block.

```js
    }
```

- Ends the loop.

```js
    filterAll.classList.toggle("active",current_filter=="all")
```

- Updates the `active` class on the `All` button.
- If the current filter is `all`, the button gets the class `active`.
- Otherwise, the class is removed.

```js
    filterActive.classList.toggle("active",current_filter=="active")
```

- Updates the style of the Active filter button.

```js
    filterDone.classList.toggle("active",current_filter=="done")
```

- Updates the style of the Done filter button.

```js
}
```

- Ends the `applyfilter` function.

```js
function setFilter(name){
```

- Defines a helper function to change the filter.
- It receives the filter name (`"all"`, `"active"`, or `"done"`).

```js
    current_filter = name
```

- Saves the selected filter in the `current_filter` variable.

```js
    refresh()
```

- Calls `refresh()` right away to update the tasks and counter.

```js
}
```

- Ends the function.

```js
filterActive.addEventListener("click",()=>{
```

- When the Active button is clicked, run this function.

```js
    setFilter("active")
```

- Sets the view to show only active tasks.

```js
})
```

- Ends the event listener.

```js
filterAll.addEventListener("click",()=>{
```

- When the All button is clicked, run this function.

```js
    setFilter("all")
```

- Shows all tasks.

```js
})
```

- Ends the event listener.

```js
filterDone.addEventListener("click",()=>{
```

- When the Done button is clicked, run this function.

```js
    setFilter("done")
```

- Shows only completed tasks.

```js
})
```

- Ends the event listener.

```js
refresh()
```

- Calls the `refresh()` function once at the end.
- This makes sure the initial counter and filter state are correct when the page loads.

## 11) What this app does overall

This JavaScript code creates a small task management app with:

- A welcome message with the current date
- A theme toggle for dark mode
- A task input and add button
- A task list with delete and complete options
- A counter showing how many tasks remain
- Filter buttons: All, Active, and Done

## 12) Friendly note for students

This project is a great exercise for learning:

- `document.getElementById()`
- `document.createElement()`
- `addEventListener()`
- `classList.toggle()`
- `for` loops
- functions
- conditionals (`if`, `else`)
- events and DOM manipulation

It is a simple example of how JavaScript can change what appears on a web page without reloading the page.

## 13) Small improvements you could add

- Use `const` for `starterTasks` and `current_filter`
- Add local storage so tasks stay saved after refresh
- Add a "clear completed" button
- Add animations for task addition/removal
- Improve the typo in the class name `elemetn`

That is the complete explanation of the JavaScript logic in the project.
