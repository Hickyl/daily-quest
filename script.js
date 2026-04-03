'use strict'


let dailyToDo = document.getElementById("daily-todo");
let inputTask = document.getElementById("input-task");
let inputXp = document.getElementById("input-xp");
let addTaskXpBtn = document.getElementById("add-task-xp");
let allTasksList = document.getElementById("all-tasks-list");
let showLevel = document.getElementById("show-level");
let showXp = document.getElementById("show-xp");
let resetBtn = document.getElementById("reset-btn");

//SHOWING TASKS + XP + CREATING BUTTON
function renderTasks(){
    allTasksList.innerHTML = "";
                   for (let i = 0; i < userTasks.length; i++) {
                    let task = userTasks[i]; 
                    let li = document.createElement("li");
                    let taskText = document.createElement("span");
                    taskText.className = "task-text";
                    taskText.textContent = `${task.name} (${task.xp} XP)`;
                    let completeButton = document.createElement("button");
                    completeButton.textContent = "done "
                    completeButton.className = "complete-btn";
                    completeButton.addEventListener("click", function() {
                         completeTask(i);
                         renderTasks();
                         renderXP();
                         renderLevel();
                       });
                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "delete";
                    deleteBtn.className = "delete-btn";
                    deleteBtn.addEventListener("click", function(){
                        deleteTask(i);
                        renderTasks();
                        renderXP();
                        renderLevel();
                    })
                          if (task.completed) {
                             li.classList.add('completed');
                             li.appendChild(taskText);
                             li.appendChild(deleteBtn);
                             allTasksList.appendChild(li);
                         }else{
                            li.appendChild(taskText);
                              li.appendChild(completeButton);
                              li.appendChild(deleteBtn);
                              allTasksList.appendChild(li);
                         }
                    }
 
    }

//SHOW XP
function renderXP(){
    showXp.textContent = getTotalXP();
}

//SHOW LEVEL
function renderLevel(){
    showLevel.textContent = `level: ${getLevel()}, you are ${getLevelName(getLevel())}`
}

//SHOWING ALL STUFF
function renderAll(){
    renderTasks();
    renderXP();
    renderLevel();
}

//ADD TASKS BUTTON
addTaskXpBtn.addEventListener("click", function click(){
    let task = inputTask.value;
    let xp = Number(inputXp.value);
    addTask(task, xp);
    renderTasks();
    renderXP();
    renderLevel();
    saveData()
    inputTask.value = "";
    inputXp.value = ""
})

//RESET BUTTON
resetBtn.addEventListener("click", function(){
    resetData()
})
renderAll();
