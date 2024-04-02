import { updateLocalStorage } from "./storage";

function deleteTask(elem){
    let list = JSON.parse(localStorage.getItem("taskList"));
    for (const key in list) {
        if(list[key].title == elem.target.parentNode.querySelector('.title').textContent){
            list.splice(key,1);
        }
    }
    elem.target.parentNode.remove();
    updateLocalStorage("taskList", JSON.stringify(list));
 }

 export {deleteTask}