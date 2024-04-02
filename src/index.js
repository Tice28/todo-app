import { loadAllTasksPage, loadAddCatPage, loadAddTaskPage, displayTasks } from "./display";

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");
const navAddCat = document.getElementById("navAddCat");
const dropdown = document.getElementById("select-dropdown");

navAll.addEventListener("click", () => {
    loadAllTasksPage();
    displayTasks(JSON.parse(localStorage.getItem("taskList")));
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