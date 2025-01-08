// 2) Project: To-Do List Application
// Key Features:
// Add Tasks

// Allow users to type a task and click "Add" to add it to the list.
// Each task should have a checkbox to mark it as completed.
// Delete Tasks

// Users can delete tasks from the list with a "Delete" button next to each task.
// Mark Task as Completed

// Users can click a checkbox next to each task to mark it as completed. Completed tasks will have a different style (e.g., strike-through text).
// Clear All Tasks

// Add a button that allows users to remove all tasks at once.
// Save Tasks to Local Storage

// Save tasks in the browser’s localStorage so that when the page is reloaded, the tasks remain.
// Tools and Concepts:
// Arrow Functions for handling events (e.g., adding and deleting tasks).
// DOM Manipulation for creating, deleting, and modifying list items (document.createElement, appendChild, innerHTML, etc.).
// Event Listeners for capturing user interactions (e.g., adding tasks or clicking checkboxes).
// Local Storage for persistent data (optional, but great for practice).
const form = document.getElementById('myForm');
const result = document.getElementById("result");
const deleteAll = document.getElementById("delete")
let counter = 0;


function removeTask(btn){
    btn.parentElement.remove()

    counter--;
    if(counter <= 5){
        result.style.overflowY = "hidden"
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    addTask()
})

function addTask(){
    counter++;

    const task = form.task.value
    
    result.innerHTML += `
    <div class="taskDiv">
        <input type="checkbox" class="taskCheck" onclick="checkedTick(this)">
        <p class="taskP">${task}</p>
        <button class="taskRemove" onclick="removeTask(this)">Remove</button>
    </div>
    `
    if(counter >= 6){
        result.style.overflowY = "scroll"
    }

    form.reset()
}

function checkedTick(tick){
    const tickSibling = tick.nextElementSibling

    if(tick.checked){
        tickSibling.style.textDecoration = "line-through"
        tickSibling.style.textDecorationColor = "rgba(255, 255, 255, 0.55)"
        tickSibling.style.fontSize = "1.5rem"
        tickSibling.style.color = "rgba(255, 255, 255, 0.55)"
    }else{
        tickSibling.style.textDecoration = "none"
        tickSibling.style.fontSize = "1.7rem"
        tickSibling.style.color = "white"
    }
}

deleteAll.addEventListener("click", function(){
    result.innerHTML = "";
})

// -------------------------------------------------------------