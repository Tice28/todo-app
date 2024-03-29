function loadAllTasksPage(){
    const content = document.getElementById("content");
    content.innerHTML = `
    Task Container`;
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

export {loadAddTaskPage, loadAllTasksPage}