import { loadAllTasksPage } from "./display";
import { loadAddTaskPage } from "./display";
import { loadAddCatPage } from "./display";

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");
const navAddCat = document.getElementById("navAddCat");
const dropdown = document.getElementById("select-dropdown");

navAll.addEventListener("click", loadAllTasksPage);
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