(()=>{"use strict";function t(t){t.target.parentNode.remove()}function e(){document.getElementById("content").innerHTML=""}function n(){document.getElementById("content").innerHTML='\n    <form target="_self">\n    <h1>New Task</h1>\n    <label for="task-title">Title</label>\n    <input type="text" name="title" id="task-title" />\n    <label for="task-prio">Priority</label>\n    <input type="number" name="prio" id="task-prio" />\n    <label for="task-date">Due Date</label>\n    <input type="date" name="date" id="task-date" />\n    <label for="task-category">Category</label>\n    <input id="task-category" list="category-list" />\n    <datalist id="category-list">\n      <option value="temp">temp</option>\n    </datalist>\n    <button type="submit">Add</button>\n    <button id="cancelBtn">Cancel</button>\n  </form>'}function a(){document.getElementById("content").innerHTML='<form target="_self">\n  <h1>New Category</h1>\n  <label for="cat-title">Title</label>\n  <input type="text" name="title" id="cat-title" />\n  <label for="cat-color">Category Color</label>\n  <input type="color" name="color" id="cat-color" />\n  <label for="task-category">Category Tag</label>\n  <input id="cat-tag" list="tags-list" />\n  <datalist id="tags-list">\n    <option value="tag">tag</option>\n  </datalist>\n  <button type="submit">Add</button>\n  <button id="cancelBtn">Cancel</button>\n</form>'}function l(e){const n=document.getElementById("content");for(let a=0;a<e.length;a++){let l=document.createElement("div"),o=document.createElement("button");o.innerText,o.textContent="Delete",o.addEventListener("click",t),l.innerHTML=`${e[a].getCategory()} <div class="title">${e[a].getTitle()}</div>\n    ${e[a].getPriority()} ${e[a].getDate()} \n    <button>Modify</button><button>Complete</button>`,l.appendChild(o),l.classList.add("task"),n.appendChild(l)}}function o(t,e,n,a){let l=t,o=e,i=n,d=a;return{getTitle:()=>l,getPriority:()=>o,getDate:()=>i,getCategory:()=>d}}let i=[o("TestTask1",1,"5/20/2024","TestCat1"),o("TestTask2",1,"5/23/2024","TestCat2")];const d=document.getElementById("navAll"),c=document.getElementById("navAddTask"),r=document.getElementById("navAddCat"),s=document.getElementById("select-dropdown");d.addEventListener("click",(()=>{e(),l(i)})),c.addEventListener("click",n),r.addEventListener("click",a),s.addEventListener("change",(()=>{switch(s.value){case"addTask":n();break;case"all":e(),l(i);break;case"addCat":a()}}))})();