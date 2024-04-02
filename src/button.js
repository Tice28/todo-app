function deleteTask(elem){
    // gets text - elem.target.parentNode.querySelector('.title').textContent;
    elem.target.parentNode.remove();
 }

 export {deleteTask}