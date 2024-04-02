import { loadAllTasksPage, loadAddCatPage, loadAddTaskPage, displayTasks } from "./display";
import createTask from "./task";

let taskList = [createTask("TestTask1",1,"5/20/2024","TestCat1"),createTask("TestTask2",1,"5/23/2024","TestCat2")];

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
            break;
        case "addCat":
            loadAddCatPage();
        default:
            break;
    }
})