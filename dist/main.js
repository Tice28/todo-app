(()=>{"use strict";class t{constructor(t,e,n,a){this.title=t,this.priority=e,this.date=n,this.category=a,this.isComplete=!1}}class e{constructor(t,e,n){this.title=t,this.color=e,this.tag=n}}function n(t){let e=JSON.parse(localStorage.getItem("taskList"));for(const n in e)e[n].title==t.target.parentNode.querySelector(".title").textContent&&e.splice(n,1);t.target.parentNode.remove(),localStorage.setItem("taskList",JSON.stringify(e))}function a(t,e){let n=JSON.parse(localStorage.getItem("taskList"));for(const a in n)n[a].title==t.target.parentNode.querySelector(".title").textContent&&(n[a]=e);localStorage.setItem("taskList",JSON.stringify(n)),s()}function l(t){let e=JSON.parse(localStorage.getItem("taskList"));for(const n in e)e[n].title==t.target.parentNode.querySelector(".title").textContent&&(e[n].isComplete=!0);localStorage.setItem("taskList",JSON.stringify(e)),s()}function o(){document.getElementById("content").innerHTML='\n    <form action="" method="get" onSubmit="event.preventDefault();">\n    <h1>New Task</h1>\n    <label for="task-title">Title</label>\n    <input type="text" name="title" id="task-title" />\n    <label for="task-prio">Priority</label>\n    <input list="priority-list" name="prio" id="task-prio" pattern="[1-3]{1}"/>\n    <label for="task-date">Due Date</label>\n    <input type="date" name="date" id="task-date" />\n    <label for="task-category">Category</label>\n    <input id="task-category" list="category-list" />\n    <datalist id="category-list">\n      <option value="temp">temp</option>\n    </datalist>\n    <datalist id="priority-list">\n      <option value="1">High</option>\n      <option value="2">Normal</option>\n      <option value="3">Low</option>\n    </datalist>\n    <button type="submit" class="submitBtn">Add</button>\n    <input type="button" class="cancelBtn">Cancel</input>\n  </form>',document.getElementsByClassName("submitBtn")[0].addEventListener("click",(()=>{!function(){const e=document.getElementById("task-title").value,n=document.getElementById("task-prio").value,a=document.getElementById("task-date").value,l=document.getElementById("task-category").value;let o=JSON.parse(localStorage.getItem("taskList"));null==o?localStorage.setItem("taskList",JSON.stringify([new t(e,priority,a,l)])):(o.push(new t(e,n,a,l)),localStorage.setItem("taskList",JSON.stringify(o)))}(),s()})),document.getElementsByClassName("cancelBtn")[0].addEventListener("click",s)}function i(){document.getElementById("content").innerHTML='\n  <form action="" method="get" onSubmit="event.preventDefault();">\n  <h1>New Category</h1>\n  <label for="cat-title">Title</label>\n  <input type="text" name="title" id="cat-title" required/>\n  <label for="cat-color">Category Color</label>\n  <input type="color" name="color" id="cat-color" />\n  <label for="task-category">Category Tag</label>\n  <input id="cat-tag" list="tags-list" required/>\n  <datalist id="tags-list">\n    <option value="tag">tag</option>\n  </datalist>\n  <button type="submit" class="submitBtn">Add</button>\n  <input type="button" class="cancelBtn">Cancel</input>\n</form>',document.getElementsByClassName("submitBtn")[0].addEventListener("click",(()=>{!function(){const t=document.getElementById("cat-title").value,n=document.getElementById("cat-color").value,a=document.getElementById("cat-tag").value;let l=JSON.parse(localStorage.getItem("catList"));null==l?localStorage.setItem("catList",JSON.stringify([new e(t,n,a)])):(l.push(new e(t,n,a)),localStorage.setItem("catList",JSON.stringify(l)))}(),s()})),document.getElementsByClassName("cancelBtn")[0].addEventListener("click",d)}function s(){r();const t=document.getElementById("content");let e=JSON.parse(localStorage.getItem("taskList"));if(e&&e.length>0){let o=0;for(;o<e.length;){if(!0!==e[o].isComplete){let i=document.createElement("div"),s=document.createElement("button");s.innerText,s.textContent="Modify",s.addEventListener("click",a);let c=document.createElement("button");c.innerText,c.textContent="Complete",c.addEventListener("click",l);let d=document.createElement("button");d.innerText,d.textContent="Delete",d.addEventListener("click",n),i.innerHTML=`${e[o].category} <div class="title">${e[o].title}</div>\n        ${e[o].priority} ${e[o].date}`,i.appendChild(s),i.appendChild(c),i.appendChild(d),i.classList.add("task"),t.appendChild(i)}o++}}else document.getElementById("content").innerHTML="<h1>No tasks! Get started by going to the 'Add Task' page."}function c(){r();let t=JSON.parse(localStorage.getItem("taskList"));const e=document.getElementById("content");if(t&&t.length>0){let n=0;for(;n<t.length;){if(1==t[n].isComplete){let a=document.createElement("div");a.innerHTML=`${t[n].category} <div class="title">${t[n].title}</div>\n        ${t[n].priority} ${t[n].date}`,a.classList.add("task"),e.appendChild(a)}n++}}else document.getElementById("content").innerHTML="<h1>No completed tasks! Finish a task to have it display here!"}function d(){r();let t=JSON.parse(localStorage.getItem("catList"));const e=document.getElementById("content");if(t&&t.length>0){let n=0;for(;n<t.length;){let a=document.createElement("div");a.innerHTML=`\n      ${t[n].title} ${t[n].color} ${t[n].tag}`,a.classList.add("category"),e.appendChild(a),n++}}else document.getElementById("content").innerHTML="<h1>No Categories! Get started by going to the 'Add Category' page."}function r(){document.getElementById("content").innerHTML=""}const m=document.getElementById("navAll"),g=document.getElementById("navAddTask"),u=document.getElementById("navAddCat"),p=document.getElementById("navComplete"),y=document.getElementById("navCategories"),k=document.getElementById("select-dropdown");m.addEventListener("click",(()=>{s()})),g.addEventListener("click",o),u.addEventListener("click",i),p.addEventListener("click",(()=>{c()})),y.addEventListener("click",d),k.addEventListener("change",(()=>{switch(k.value){case"addTask":o();break;case"all":s();break;case"addCat":i();break;case"completed":c();break;case"categories":d()}}))})();