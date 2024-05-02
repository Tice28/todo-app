import { completeTask, deleteTask, addCat, addTask, deleteCategory } from "./button";

function loadAddTaskPage(){
  const categories = JSON.parse(localStorage.getItem("catList"));
  const content = document.getElementById("content");
    content.innerHTML = `
    <form action="" method="get" onSubmit="event.preventDefault();">
    <h1>New Task</h1>
    <label for="task-title">Title</label>
    <input type="text" name="title" id="task-title" />
    <label for="task-prio">Priority</label>
    <select name="prio" id="task-prio">
      <option value="High">High</option>
      <option value="Normal">Normal</option>
      <option value="Low">Low</option>
    <select/>
    <label for="task-date">Due Date</label>
    <input type="date" name="date" id="task-date" />
    <label for="task-category">Category</label>
    <select id="task-category"><select/>
    <button type="submit" class="submitBtn" id="addTaskSubmit">Add</button>
    <input type="button" class="cancelBtn" value="cancel" id="addTaskCancel"/>
  </form>`;
  const categoryOptions = document.getElementById("task-category");
  
  for(let i = 0; i < categories.length; i++){
    const childOption = document.createElement("option");
    childOption.value = JSON.stringify(categories[i]); 
    childOption.textContent = categories[i].title;
    categoryOptions.appendChild(childOption);
  }
  
  const submitBtn = document.getElementById("addTaskSubmit").addEventListener("click", () => {
    addTask();
    displayCurrentTasks();
  });
  const cancelBtn = document.getElementById("addTaskCancel").addEventListener("click", displayCurrentTasks);
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
  <label for="cat-tag">Category Tag</label>
  <div class="tag-display">
  <img id="tag-image" src="star.svg" alt="star" onerror="this.style.display='none'"/>
  <select id="cat-tag" list="tags-list" placeholder="Choose a tag" required>
    <option value="Star">Important</option>
    <option value="Work">Work</option>
    <option value="Home">Home</option>
    <option value="School">School</option>
  <select/>
  </div>
  <button type="submit" class="submitBtn" id="addCatSubmit">Add</button>
  <input type="button" class="cancelBtn" id="addCatCancel" value="cancel" />
  </form>`;

  const tagImg = document.getElementById("tag-image");
  const catTag = document.getElementById("cat-tag");
  catTag.addEventListener("change", () =>{setImage(tagImg, `${catTag.value.toLowerCase()}.svg`)});
  const submitBtn = document.getElementById("addCatSubmit").addEventListener("click", () =>{addCat(); displayCurrentTasks();});
  const cancelBtn = document.getElementById("addCatCancel").addEventListener("click", displayCurrentCategories);
}

function displayCurrentTasks(){
  const dropdown = document.getElementById("select-dropdown");
  dropdown.value = "all";
  
  clearContent();
  const content = document.getElementById("content");
  let taskArr = JSON.parse(localStorage.getItem("taskList"));

  if(taskArr && taskArr.length > 0){
    let i = 0;
    while(i < taskArr.length){
      if(taskArr[i].hasOwnProperty("isComplete")){
        if(taskArr[i].isComplete !== true){
          let childTask = document.createElement("div");
  
          let task = taskArr[i];
          let category = JSON.parse(taskArr[i].category);
          let modButton = document.createElement("button");
          modButton.innerText, modButton.textContent = "Modify";
          modButton.addEventListener("click", () => {displayModifyForm(task)});
      
          let completeButton = document.createElement("button");
          completeButton.innerText, completeButton.textContent = "Complete";
          completeButton.addEventListener("click", completeTask);
      
          let delButton = document.createElement("button");
          delButton.innerText, delButton.textContent = "Delete";
          delButton.addEventListener("click", () => {deleteTask(delButton); displayCurrentTasks()});
      
          childTask.innerHTML = 
          `<img src="${category.tag}" alt="category tag" class="category-icon"/><div class="title">${taskArr[i].title}</div>
          <div>Priority: ${taskArr[i].priority}</div><div>Date Due: ${taskArr[i].date}</div>`;
          let categoryIcon = childTask.getElementsByClassName("category-icon")[0].style.backgroundColor = `${category.color}`;
          childTask.appendChild(modButton);
          childTask.appendChild(completeButton);
          childTask.appendChild(delButton);

          childTask.classList.add("task");
          content.appendChild(childTask);
        }
      }
      
      i++;
    };
  }
  else{
    if(!localStorage.getItem("catList")){
      displayInitialMessage();
    }
    else{
      displayNoTasks();
    }
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
        let delButton = document.createElement("button");
        delButton.innerText, delButton.textContent = "Delete";
        delButton.addEventListener("click", () => {deleteTask(delButton); displayCompletedTasks();});

        let category = JSON.parse(taskArr[i].category);
        let childTask = document.createElement("div");
        childTask.innerHTML = 
        `<img src="${JSON.parse(taskArr[i].category).tag}" alt="category tag" class="category-icon"/> <div class="title">${taskArr[i].title}</div>
        ${taskArr[i].priority} ${taskArr[i].date}`
        childTask.classList.add("task-complete");
        let categoryIcon = childTask.getElementsByClassName("category-icon")[0].style.backgroundColor = `${category.color}`;
        childTask.appendChild(delButton);
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
  const dropdown = document.getElementById("select-dropdown");
  dropdown.value = "categories";

  clearContent();
  let catArr = JSON.parse(localStorage.getItem("catList"));
  const content = document.getElementById("content");

  if(catArr && catArr.length > 0){
    let i = 0;

    while(i < catArr.length){
      let childCat = document.createElement("div");
      let tagImg = document.createElement("img");
      let cat = document.createElement("div");

      let delButton = document.createElement("button");
      delButton.innerText, delButton.textContent = "Delete";
      delButton.addEventListener("click", () => {deleteCategory(delButton); displayCurrentCategories();});

      setImage(tagImg, `${catArr[i].tag}`);
      tagImg.classList.add("category-icon");
      cat.innerHTML = `
      <div class="title">${catArr[i].title}</div>`;
      childCat.classList.add("category");
      childCat.appendChild(tagImg);
      childCat.appendChild(cat);
      childCat.appendChild(delButton);
      let categoryIcon = childCat.getElementsByClassName("category-icon")[0].style.backgroundColor = `${catArr[i].color}`;
      content.appendChild(childCat);
      i++;
    }
  }
  else {
    displayNoCategories();
  }
}

function displayModifyForm(task){
  const modTitle = document.getElementById("mod-task-title").value = task.title;
  const modPrio = document.getElementById("mod-task-prio").value = task.priority;
  const modDate = document.getElementById("mod-task-date").value = task.date;
  const modCat = document.getElementById("mod-task-category");

  const categories = JSON.parse(localStorage.getItem("catList"));
  const categoryOptions = document.getElementById("mod-task-category");
  
  for(let i = 0; i < categories.length; i++){
    const childOption = document.createElement("option");
    childOption.value = JSON.stringify(categories[i]); 
    childOption.textContent = categories[i].title;
    categoryOptions.appendChild(childOption);
  }
  const modForm = document.getElementById("modify-form").style.visibility = "visible";
}

function clearChildren(parent){
  let num = parent.childElementCount;
  for(let i = 0; i < num; i++){
    parent.removeChild(parent.firstElementChild);
  }
}

function clearModifyForm(){
  const modTitle = document.getElementById("mod-task-title").value = null;
  const modPrio = document.getElementById("mod-task-prio").value = null;
  const modDate = document.getElementById("mod-task-date").value = null;
  const modCat = document.getElementById("mod-task-category").value = null;
  const categoryOptions = document.getElementById("mod-task-category");
  clearChildren(categoryOptions); 
  const modForm = document.getElementById("modify-form").style.visibility = "hidden";
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

function displayInitialMessage(){
  const content = document.getElementById("content");
  content.innerHTML = `<h1>Welcome! Please begin by adding a category using the 'Add Category' page. Following this, you can add a task using the 'Add Task' page.</h1>`;
}

function setImage(img, src){
  console.log(img.src)
  img.src = src;
  img.style.display = "block";
}

export {loadAddTaskPage, loadAddCatPage, displayCurrentTasks, displayCompletedTasks, displayCurrentCategories, clearModifyForm, clearChildren}