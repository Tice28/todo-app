import { loadAllTasksPage, loadAddCatPage, loadAddTaskPage, displayTasks } from "./display";
import createTask from "./task";

let taskList = [new createTask("TestTask1",1,"5/20/2024","TestCat1")];
console.log(JSON.stringify(taskList));

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");
const navAddCat = document.getElementById("navAddCat");
const dropdown = document.getElementById("select-dropdown");

navAll.addEventListener("click", () => {
    loadAllTasksPage();
    displayTasks(taskList);
});
navAddTask.addEventListener("click", loadAddTaskPage);
navAddCat.addEventListener("click", loadAddCatPage);
dropdown.addEventListener("change", () => {
    switch(dropdown.value){
        case "addTask":
            loadAddTaskPage();
            break;
        case "all":
            loadAllTasksPage();
            displayTasks(taskList);
            break;
        case "addCat":
            loadAddCatPage();
        default:
            break;
    }
})