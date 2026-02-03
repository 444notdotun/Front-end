const addATodoContainer = document.querySelector("#add-book")
const todolist = document.querySelector("#book-list ")
const orderlist = todolist.querySelector("ul")

console.log(addATodoContainer)
console.log(todolist)
console.log(orderlist)
let listOfTodos = [];
addATodoContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputValue = addATodoContainer.querySelector("input").value
    console.log(inputValue)
    orderlist.innerHTML = `<li>
              <input type="checkbox">
	    			<span class="name">${inputValue}</span>
	    			<span class="delete">delete</span>
                    <span class="complete">complete</span>
	    		</li>`
    listOfTodos.push(inputValue);
    todolist.appendChild(orderlist)
})

