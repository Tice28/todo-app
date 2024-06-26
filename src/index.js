import { modifyTask } from "./button";
import { loadAddCatPage, loadAddTaskPage, displayCurrentTasks, displayCompletedTasks, displayCurrentCategories, clearModifyForm } from "./display";

window.onload = displayCurrentTasks();

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");
const navAddCat = document.getElementById("navAddCat");
const navComplete = document.getElementById("navComplete");
const navCategories = document.getElementById("navCategories");
const dropdown = document.getElementById("select-dropdown");
const modUpdate = document.getElementById("mod-update");
modUpdate.addEventListener("click", () => {modifyTask(modUpdate); clearModifyForm()});
const modCancel = document.getElementById("mod-cancel").addEventListener("click", clearModifyForm);

navAll.addEventListener("click", () => {
    displayCurrentTasks();
    dropdown.value = "all";
});
navAddTask.addEventListener("click", () => {
    loadAddTaskPage(); 
    dropdown.value = "addTask";
});
navAddCat.addEventListener("click", () => {
    loadAddCatPage();
    dropdown.value = "addCat";
});
navComplete.addEventListener("click", () => {
    displayCompletedTasks();
    dropdown.value = "completed";
});
navCategories.addEventListener("click", () => {
    displayCurrentCategories();
    dropdown.value = "categories";
});

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