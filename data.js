'use strict'

let userTasks = [];
let totalXp = 0;
let userLevel = "";


//ADD TASK
function addTask(task, xp){
    let newObject ={}
    if(task !== null && xp > 0){
        newObject ={
            name: task,
            xp: xp,
            completed: false
        }
        userTasks.push(newObject);
    }
    saveData()
}

//COMPLETE TASK
function completeTask(index){
    if(userTasks[index]){
        userTasks[index].completed = true;
        totalXp = totalXp + userTasks[index].xp;
        deleteTask(index);
    }
    saveData();
    return totalXp;
}

//DELETE TASK
function deleteTask(index){
    if(userTasks[index]){
        userTasks.splice(index, 1)
    }
    saveData()
    return true
}

//GET LEVEL
function getLevel(){
        if (totalXp < 100) {
        return 1;
    } else if (totalXp >=100 && totalXp < 200) {
        return 2;
    } else if (totalXp>= 200 && totalXp < 350) {
        return 3;
    } else {
        return 4;
    }
}

//GET MESSAGE LEVEL
function getLevelName(level){
     if (level ==  1) {
        return "begginer. Keep going!";
    } else if (level ==  2) {
        return "pre-focusing master. Your on the track!";
    } else if (level ==  3) {
        return "focus pro!!. Well done, however u can better, move forward";
    } else {
        return "you are the focus master. But its still not end...";
    }
}

//RETURN TOTAL XP
function getTotalXP(){
    return totalXp
}

//SAVING
function saveData(){
    localStorage.setItem("totalXp", totalXp);
    localStorage.setItem("userLevel", userLevel);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
}

//LOADING
function loadData(){
    let savedXp = localStorage.getItem("totalXp");
    let savedLevel = localStorage.getItem("userLevel");
    let savedUserTasks = localStorage.getItem("userTasks");

    if(savedXp === null){
        savedXp = 0;
    }else{
        savedXp = Number(savedXp);
    }
    totalXp = savedXp
    if(savedLevel === null){
        savedLevel = 0;
    }else{
        savedLevel = Number(savedLevel);
    }
    userLevel = savedLevel
    if(savedUserTasks !== null){
        savedUserTasks = JSON.parse(savedUserTasks)
    }else{
        savedUserTasks = [ ]
    }
     userTasks = savedUserTasks
}

function resetData(){
    let allow = confirm("are u sure to delete everything?");
    if(allow){
            userTasks = [];
            totalXp = 0
            userLevel = ""
            saveData();
            renderAll();
    }
}

loadData();
