const addATodoContainer = document.querySelector("#add-book")
const todolist = document.querySelector("#book-list ")
const orderlist = todolist.querySelector("ul")
const deleteButtons = todolist.getElementsByClassName("delete")
const searchTodo = document.querySelector("#search-books")

console.log(addATodoContainer)
console.log(todolist)
console.log(orderlist)
console.log(searchTodo)
let listOfTodos = [];
let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos) 
listOfTodos= [...todos];



addATodoContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputValue = addATodoContainer.querySelector("input").value
    console.log(inputValue)
    let counter = 0;
    
    if(inputValue){
        console.log(listOfTodos);
        listOfTodos.forEach(todo => {if(todo===inputValue){
            alert("This to do already exists!");
            counter++;
        }
            
        });
        console.log(counter)
        if(counter < 1){
            listOfTodos.push(inputValue);

        let todosHTML = "";
        listOfTodos.forEach((todo) => {
            todosHTML += `<li>
                <input type="checkbox">
                <span class="name">${todo}</span>
                <span class="delete">delete</span>
                <span class="complete">complete</span>
            </li>`;
        });
        orderlist.innerHTML = todosHTML;
        todolist.appendChild(orderlist);
        orderlist.style.display = "";
        addTodo(inputValue)
        console.log(listOfTodos);}
       
    } else {
        alert("enter a to do");
    }
})


orderlist.addEventListener("click", (e) => {
    if(e.target.className === "delete"){
        const li = e.target.parentElement;
        let text = li.querySelector(".name").textContent;
        console.log(text);
        removeTodo(text)
        let indexOfText = listOfTodos.indexOf(text);
        if(indexOfText > -1){
            listOfTodos.splice(indexOfText, 1);
        }
        console.log(listOfTodos);
        li.remove();

    }   
})


orderlist.addEventListener("click", (e) => {
    if(e.target.className === "complete"){
        const li = e.target.parentElement;
        li.style.textDecoration = "line-through";
        console.log(li);
        li.querySelector("input").checked = true;
        
    }   
})

searchTodo.addEventListener("keyup",(e)=>{
    e.preventDefault()
    let searchInput = searchTodo.querySelector("input").value.trim().toLowerCase()
       const todoItems = Array.from(orderlist.children)
         todoItems.forEach((li) => {
            console.log(li)
        let  queredLi = li.querySelector(".name").textContent.toLowerCase()
        if(queredLi.includes(searchInput)){
            li.style.display = "";
        } else {
            li.style.display = "none";
        } 
    }); 
     

})




function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(text) {
  todos.push(text);
  saveTodos();
}

function removeTodo(text) {
  todos = todos.filter(todo => todo !== text);
  saveTodos();
}

function renderTodos() {
  let todosHTML = "";
  todos.forEach((todo) => {
    todosHTML += `<li>
      <input type="checkbox">
      <span class="name">${todo}</span>
      <span class="delete">delete</span>
      <span class="complete">complete</span>
    </li>`;
  });
  orderlist.innerHTML = todosHTML;
  todolist.appendChild(orderlist);
  orderlist.style.display = "";
}
renderTodos();

console.log(listOfTodos)

