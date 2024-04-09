(()=>{"use strict";class t{constructor(t,e,n,a){this.title=t,this.priority=e,this.date=n,this.category=a,this.isComplete=!1}}class e{constructor(t,e,n){this.title=t,this.color=e,this.tag=`${n}.svg`}}function n(t){let e=JSON.parse(localStorage.getItem("taskList"));for(const n in e)e[n].title==t.target.parentNode.querySelector(".title").textContent&&e.splice(n,1);t.target.parentNode.remove(),localStorage.setItem("taskList",JSON.stringify(e))}function a(t){let e=JSON.parse(localStorage.getItem("taskList"));for(const n in e)e[n].title==t.target.parentNode.querySelector(".title").textContent&&(e[n].isComplete=!0);localStorage.setItem("taskList",JSON.stringify(e)),i()}function l(){const e=JSON.parse(localStorage.getItem("catList"));document.getElementById("content").innerHTML='\n    <form action="" method="get" onSubmit="event.preventDefault();">\n    <h1>New Task</h1>\n    <label for="task-title">Title</label>\n    <input type="text" name="title" id="task-title" />\n    <label for="task-prio">Priority</label>\n    <input list="priority-list" name="prio" id="task-prio" pattern="[1-3]{1}"/>\n    <label for="task-date">Due Date</label>\n    <input type="date" name="date" id="task-date" />\n    <label for="task-category">Category</label>\n    <input id="task-category" list="category-list" />\n    <datalist id="category-list">\n    </datalist>\n    <datalist id="priority-list">\n      <option value="1">High</option>\n      <option value="2">Normal</option>\n      <option value="3">Low</option>\n    </datalist>\n    <button type="submit" class="submitBtn">Add</button>\n    <input type="button" class="cancelBtn" value="cancel" />\n  </form>';const n=document.getElementById("category-list");for(let t=0;t<e.length;t++){const a=document.createElement("option");a.value=JSON.stringify(e[t]),a.textContent=e[t].title,n.appendChild(a)}document.getElementsByClassName("submitBtn")[0].addEventListener("click",(()=>{!function(){const e=document.getElementById("task-title").value,n=document.getElementById("task-prio").value,a=document.getElementById("task-date").value,l=document.getElementById("task-category").value;let o=JSON.parse(localStorage.getItem("taskList"));null==o?localStorage.setItem("taskList",JSON.stringify([new t(e,n,a,l)])):(o.push(new t(e,n,a,l)),localStorage.setItem("taskList",JSON.stringify(o)))}(),i()})),document.getElementsByClassName("cancelBtn")[0].addEventListener("click",i)}function o(){document.getElementById("content").innerHTML='\n  <form action="" method="get" onSubmit="event.preventDefault();">\n  <h1>New Category</h1>\n  <label for="cat-title">Title</label>\n  <input type="text" name="title" id="cat-title" required/>\n  <label for="cat-color">Category Color</label>\n  <input type="color" name="color" id="cat-color" />\n  <label for="cat-tag">Category Tag</label>\n  <div class="tag-display">\n  <img id="tag-image" src="none" alt="star" onerror="this.style.display=\'none\'"/>\n  <input id="cat-tag" list="tags-list" placeholder="Choose a tag" required/>\n  </div>\n  <datalist id="tags-list">\n    <option value="Star">Important</option>\n  </datalist>\n  <button type="submit" class="submitBtn">Add</button>\n  <input type="button" class="cancelBtn" value="cancel" />\n  </form>';const t=document.getElementById("tag-image"),n=document.getElementById("cat-tag");n.addEventListener("change",(()=>{m(t,`${n.value.toLowerCase()}.svg`)})),document.getElementsByClassName("submitBtn")[0].addEventListener("click",(()=>{!function(){const t=document.getElementById("cat-title").value,n=document.getElementById("cat-color").value,a=document.getElementById("cat-tag").value;let l=JSON.parse(localStorage.getItem("catList"));null==l?localStorage.setItem("catList",JSON.stringify([new e(t,n,`${a.toLowerCase()}`)])):(l.push(new e(t,n,`${a.toLowerCase()}`)),localStorage.setItem("catList",JSON.stringify(l)))}(),i()})),document.getElementsByClassName("cancelBtn")[0].addEventListener("click",c)}function i(){r();const t=document.getElementById("content");let e=JSON.parse(localStorage.getItem("taskList"));if(e&&e.length>0){let l=0;for(;l<e.length;){if(e[l].hasOwnProperty("isComplete")&&!0!==e[l].isComplete){let o=document.createElement("div"),i=document.createElement("button");i.innerText,i.textContent="Modify",i.addEventListener("click",d);let s=document.createElement("button");s.innerText,s.textContent="Complete",s.addEventListener("click",a);let c=document.createElement("button");c.innerText,c.textContent="Delete",c.addEventListener("click",n),o.innerHTML=`<img src="${JSON.parse(e[l].category).tag}" alt="category tag"/> <div class="title">${e[l].title}</div>\n          ${e[l].priority} ${e[l].date}`,o.appendChild(i),o.appendChild(s),o.appendChild(c),o.classList.add("task"),t.appendChild(o)}l++}}else document.getElementById("content").innerHTML="<h1>No tasks! Get started by going to the 'Add Task' page."}function s(){r();let t=JSON.parse(localStorage.getItem("taskList"));const e=document.getElementById("content");if(t&&t.length>0){let n=0;for(;n<t.length;){if(1==t[n].isComplete){let a=document.createElement("div");a.innerHTML=`${t[n].category} <div class="title">${t[n].title}</div>\n        ${t[n].priority} ${t[n].date}`,a.classList.add("task"),e.appendChild(a)}n++}}else document.getElementById("content").innerHTML="<h1>No completed tasks! Finish a task to have it display here!"}function c(){r();let t=JSON.parse(localStorage.getItem("catList"));const e=document.getElementById("content");if(t&&t.length>0){let n=0;for(;n<t.length;){let a=document.createElement("div"),l=document.createElement("img"),o=document.createElement("div");m(l,`${t[n].tag}`),o.innerHTML=`\n      ${t[n].title} ${t[n].color}`,a.classList.add("category"),a.appendChild(l),a.appendChild(o),e.appendChild(a),n++}}else document.getElementById("content").innerHTML="<h1>No Categories! Get started by going to the 'Add Category' page."}function d(){document.getElementById("modify-form").style.visibility="visible"}function r(){document.getElementById("content").innerHTML=""}function m(t,e){console.log(t.src),t.src=e,t.style.display="block"}window.onload=i();const g=document.getElementById("navAll"),u=document.getElementById("navAddTask"),p=document.getElementById("navAddCat"),y=document.getElementById("navComplete"),v=document.getElementById("navCategories"),E=document.getElementById("select-dropdown");document.getElementById("mod-cancel").addEventListener("click",(function(){document.getElementById("mod-task-title").value=null,document.getElementById("mod-task-prio").value=null,document.getElementById("mod-task-date").value=null,document.getElementById("mod-task-category").value=null,document.getElementById("modify-form").style.visibility="hidden"})),g.addEventListener("click",(()=>{i(),E.value="all"})),u.addEventListener("click",(()=>{l(),E.value="addTask"})),p.addEventListener("click",(()=>{o(),E.value="addCat"})),y.addEventListener("click",(()=>{s(),E.value="completed"})),v.addEventListener("click",(()=>{c(),E.value="categories"})),E.addEventListener("change",(()=>{switch(E.value){case"addTask":l();break;case"all":i();break;case"addCat":o();break;case"completed":s();break;case"categories":c()}}))})();