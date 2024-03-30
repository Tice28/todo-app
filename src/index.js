import { loadAllTasksPage } from "./display";
import { loadAddTaskPage } from "./display";
import { loadAddCatPage } from "./display";

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");
const navAddCat = document.getElementById("navAddCat");

navAll.addEventListener("click", loadAllTasksPage);
navAddTask.addEventListener("click", loadAddTaskPage);
navAddCat.addEventListener("click", loadAddCatPage);
