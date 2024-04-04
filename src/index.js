import { loadAddCatPage, loadAddTaskPage, displayCurrentTasks, displayCompletedTasks, displayCurrentCategories } from "./display";

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");
const navAddCat = document.getElementById("navAddCat");
const navComplete = document.getElementById("navComplete");
const navCategories = document.getElementById("navCategories");
const dropdown = document.getElementById("select-dropdown");

navAll.addEventListener("click", () => {
    displayCurrentTasks();
});
navAddTask.addEventListener("click", loadAddTaskPage);
navAddCat.addEventListener("click", loadAddCatPage);
navComplete.addEventListener("click", () => {
    displayCompletedTasks();
});
navCategories.addEventListener("click", displayCurrentCategories);
dropdown.addEventListener("change", () => {
    switch(dropdown.value){
        case "addTask":
            loadAddTaskPage();
            break;
        case "all":
            displayCurrentTasks();
            break;
        case "addCat":
            loadAddCatPage();
            break;
        case "completed":
            displayCompletedTasks();
            break;
        case "categories":
            displayCurrentCategories();
            break;
        default:
            break;
    }
})