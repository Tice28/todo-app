import { completeTask, deleteTask, modifyTask, addCat, addTask } from "./button";

function loadAddTaskPage(){
  const content = document.getElementById("content");
    content.innerHTML = `
    <form action="" method="get" onSubmit="event.preventDefault();">
    <h1>New Task</h1>
    <label for="task-title">Title</label>
    <input type="text" name="title" id="task-title" />
    <label for="task-prio">Priority</label>
    <input list="priority-list" name="prio" id="task-prio" pattern="[1-3]{1}"/>
    <label for="task-date">Due Date</label>
    <input type="date" name="date" id="task-date" />
    <label for="task-category">Category</label>
    <input id="task-category" list="category-list" />
    <datalist id="category-list">
      <option value="temp">temp</option>
    </datalist>
    <datalist id="priority-list">
      <option value="1">High</option>
      <option value="2">Normal</option>
      <option value="3">Low</option>
    </datalist>
    <button type="submit" class="submitBtn">Add</button>
    <input type="button" class="cancelBtn">Cancel</input>
  </form>`;
  const submitBtn = document.getElementsByClassName("submitBtn")[0].addEventListener("click", () => {
    addTask();
    displayCurrentTasks();
  });
  const cancelBtn = document.getElementsByClassName("cancelBtn")[0].addEventListener("click", displayCurrentTasks);
}

function loadAddCatPage(){
  const content = document.getElementById("content");
  content.innerHTML = `
  <form action="" method="get" onSubmit="event.preventDefault();">
  <h1>New Category</h1>
  <label for="cat-title">Title</label>
  <input type="text" name="title" id="cat-title" required/>
  <label for="cat-color">Category Color</label>
  <input type="color" name="color" id="cat-color" />
  <label for="task-category">Category Tag</label>
  <input id="cat-tag" list="tags-list" required/>
  <datalist id="tags-list">
    <option value="tag">tag</option>
  </datalist>
  <button type="submit" class="submitBtn">Add</button>
  <input type="button" class="cancelBtn">Cancel</input>
</form>`;
const submitBtn = document.getElementsByClassName("submitBtn")[0].addEventListener("click", () =>{addCat(); displayCurrentTasks();});
const cancelBtn = document.getElementsByClassName("cancelBtn")[0].addEventListener("click", displayCurrentCategories);
}

function displayCurrentTasks(){
  clearContent();
  const content = document.getElementById("content");
  let taskArr = JSON.parse(localStorage.getItem("taskList"));

  if(taskArr && taskArr.length > 0){
    let i = 0;
    while(i < taskArr.length){
      
      if(taskArr[i].isComplete !== true){
        let childTask = document.createElement("div");
  
        let modButton = document.createElement("button");
        modButton.innerText, modButton.textContent = "Modify";
        modButton.addEventListener("click", modifyTask);
    
        let completeButton = document.createElement("button");
        completeButton.innerText, completeButton.textContent = "Complete";
        completeButton.addEventListener("click", completeTask);
    
        let delButton = document.createElement("button");
        delButton.innerText, delButton.textContent = "Delete";
        delButton.addEventListener("click", deleteTask);
    
        childTask.innerHTML = 
        `${taskArr[i].category} <div class="title">${taskArr[i].title}</div>
        ${taskArr[i].priority} ${taskArr[i].date}`;
        childTask.appendChild(modButton);
        childTask.appendChild(completeButton);
        childTask.appendChild(delButton);
        childTask.classList.add("task");
        content.appendChild(childTask);
      }
      
      i++;
    };
  }
  else{
    displayNoTasks();
  }
}

function displayCompletedTasks(){
  clearContent();
  let taskArr = JSON.parse(localStorage.getItem("taskList"));
  const content = document.getElementById("content");

  if(taskArr && taskArr.length > 0){
    let i = 0;

    while(i < taskArr.length){
      if(taskArr[i].isComplete == true){
        let childTask = document.createElement("div");
        childTask.innerHTML = 
        `${taskArr[i].category} <div class="title">${taskArr[i].title}</div>
        ${taskArr[i].priority} ${taskArr[i].date}`
        childTask.classList.add("task");
        content.appendChild(childTask);
      }
      i++;
    }
  }
  else{
    displayNoCompletedTasks();
  }
}

function displayCurrentCategories(){
  clearContent();
  let catArr = JSON.parse(localStorage.getItem("catList"));
  const content = document.getElementById("content");

  if(catArr && catArr.length > 0){
    let i = 0;

    while(i < catArr.length){
      let childCat = document.createElement("div");
      childCat.innerHTML = `
      ${catArr[i].title} ${catArr[i].color} ${catArr[i].tag}`;
      childCat.classList.add("category");
      content.appendChild(childCat);
      i++;
    }
  }
  else {
    displayNoCategories();
  }
}

function clearContent(){
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function displayNoTasks(){
  const content = document.getElementById("content");
  content.innerHTML = `<h1>No tasks! Get started by going to the 'Add Task' page.`;
}

function displayNoCompletedTasks(){
  const content = document.getElementById("content");
  content.innerHTML = `<h1>No completed tasks! Finish a task to have it display here!`;
}

function displayNoCategories(){
  const content = document.getElementById("content");
  content.innerHTML = `<h1>No Categories! Get started by going to the 'Add Category' page.`;
}

export {loadAddTaskPage, loadAddCatPage, displayCurrentTasks, displayCompletedTasks, displayCurrentCategories}