import { clearChildren, displayCurrentTasks } from "./display";
import { createCategory, createTask } from "./data";

function deleteTask(elem){
    let list = JSON.parse(localStorage.getItem("taskList"));
    for (const key in list) {
        if(list[key].title == elem.parentNode.querySelector('.title').textContent){
            list.splice(key,1);
        }
    }
    elem.parentNode.remove();
    localStorage.setItem("taskList", JSON.stringify(list));
 }

 function deleteCategory(elem){
    let list = JSON.parse(localStorage.getItem("catList"));
    for (const key in list) {
        if(list[key].title == elem.parentNode.querySelector('.title').textContent){
            list.splice(key,1);
        }
    }
    elem.parentNode.remove();
    localStorage.setItem("catList", JSON.stringify(list));
 }


function modifyTask(elem){
    let list = JSON.parse(localStorage.getItem("taskList"));
    const argArr = elem.parentNode.getElementsByClassName("modify-input");
    for (const key in list) {
    if(list[key].title == elem.parentNode.querySelector('#mod-task-title').value){
        list[key] = updateTask(argArr);
    }
    }
    localStorage.setItem("taskList", JSON.stringify(list));
    displayCurrentTasks();
}

function updateTask(argArray){
    let task = new createTask(
        argArray[0].value,
        argArray[1].value,
        argArray[2].value,
        argArray[3].value
    );

    return task;
}

function completeTask(elem){
    let list = JSON.parse(localStorage.getItem("taskList"));
    for (const key in list) {
        if(list[key].title == elem.target.parentNode.querySelector('.title').textContent){
            list[key].isComplete = true;
        }
    }
    localStorage.setItem("taskList", JSON.stringify(list));
    displayCurrentTasks();
}

function addCat(){
    const title = document.getElementById("cat-title").value;
    const color = document.getElementById("cat-color").value;
    const tag = document.getElementById("cat-tag").value;

    let categories = JSON.parse(localStorage.getItem("catList"));

    if(categories == null){
        localStorage.setItem("catList", JSON.stringify([new createCategory(title,color,`${tag.toLowerCase()}`)]))
    }
    else{
        categories.push(new createCategory(title,color,`${tag.toLowerCase()}`));
        localStorage.setItem("catList", JSON.stringify(categories));
    }
}

function addTask(){
    const defaultCat = `{"title":"Important","color":"#FFF000","tag":"star.svg"}`;
    const title = document.getElementById("task-title").value;
    const prio = document.getElementById("task-prio").value;
    const date = document.getElementById("task-date").value;
    let category = document.getElementById("task-category").value;
    if(category == ""){
        category = defaultCat;
    }
    let tasks = JSON.parse(localStorage.getItem("taskList"));

    if(tasks == null){
        localStorage.setItem("taskList", JSON.stringify([new createTask(title,prio,date,category)]));
    }
    else{
        tasks.push(new createTask(title,prio,date,category));
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }
}

 export {deleteTask, deleteCategory, modifyTask, completeTask, addCat, addTask}