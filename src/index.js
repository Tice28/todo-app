import { loadAllTasksPage } from "./display";
import { loadAddTaskPage } from "./display";

const navAll = document.getElementById("navAll");
const navAddTask = document.getElementById("navAddTask");

navAll.addEventListener("click", loadAllTasksPage);
navAddTask.addEventListener("click", loadAddTaskPage);
