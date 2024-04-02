import { deleteTask } from "./button";

function loadAllTasksPage(){
    const content = document.getElementById("content");
    content.innerHTML = ``;
}

function loadAddTaskPage(){
  const content = document.getElementById("content");
    content.innerHTML = `
    <form target="_self">
    <h1>New Task</h1>
    <label for="task-title">Title</label>
    <input type="text" name="title" id="task-title" />
    <label for="task-prio">Priority</label>
    <input type="number" name="prio" id="task-prio" />
    <label for="task-date">Due Date</label>
    <input type="date" name="date" id="task-date" />
    <label for="task-category">Category</label>
    <input id="task-category" list="category-list" />
    <datalist id="category-list">
      <option value="temp">temp</option>
    </datalist>
    <button type="submit">Add</button>
    <button id="cancelBtn">Cancel</button>
  </form>`;
}

function loadAddCatPage(){
  const content = document.getElementById("content");
  content.innerHTML = `<form target="_self">
  <h1>New Category</h1>
  <label for="cat-title">Title</label>
  <input type="text" name="title" id="cat-title" />
  <label for="cat-color">Category Color</label>
  <input type="color" name="color" id="cat-color" />
  <label for="task-category">Category Tag</label>
  <input id="cat-tag" list="tags-list" />
  <datalist id="tags-list">
    <option value="tag">tag</option>
  </datalist>
  <button type="submit">Add</button>
  <button id="cancelBtn">Cancel</button>
</form>`;
}

function displayTasks(taskArr){
  const content = document.getElementById("content");

  for(let i = 0; i < taskArr.length; i++){
    let childTask = document.createElement("div");

    let delButton = document.createElement("button");
    delButton.innerText, delButton.textContent = "Delete";
    delButton.addEventListener("click", deleteTask);

    childTask.innerHTML = 
    `${taskArr[i].getCategory()} ${taskArr[i].getTitle()}
    ${taskArr[i].getPriority()} ${taskArr[i].getDate()} 
    <button>Modify</button><button>Complete</button>`;
    childTask.appendChild(delButton);
    childTask.classList.add("task");
    content.appendChild(childTask);
  }
}

export {loadAddTaskPage, loadAllTasksPage, loadAddCatPage, displayTasks}