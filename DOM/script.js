let searchBook =document.getElementById("search-books")
console.log(searchBook);
let title = document.getElementsByClassName("title")
console.log(title);
let list = document.getElementsByTagName("li")
console.log(list);
let secondbook2 = document.querySelector("#search-books")
console.log(secondbook2)


const booklist = document.querySelector("#book-list ul")
console.log(booklist);
booklist.addEventListener("click",(e)=>{
    console.log(e);
    if(e.target.textContent==="delete"){
        const li = e.target.parentElement
        console.log(li);
        li.remove()
    }
    })


const addForm = document.getElementById("add-book")
console.log(addForm);
addForm.addEventListener("submit",(e)=>{
    console.log(e);
    e.preventDefault();
    const value = addForm.querySelector("input").value.trim()
    console.log(value);
    if(value){
       let {newli,firstSpanTag,secondSpanTag}= createNewElement()
       addCreatedElements(newli,firstSpanTag,secondSpanTag)
       inputvalues(firstSpanTag,secondSpanTag,value)
       styleNewElement(firstSpanTag,secondSpanTag)
    }
    else{
        alert("oga are you blind! just add a book")
    }
})

const search = document.getElementById("search-books")
console.log(search)
search.addEventListener("keyup",(e)=>{
    e.preventDefault()
    const bookItems = Array.from(booklist.children)
    const inputValue = search.querySelector("input").value.trim().toLowerCase()
    bookItems.forEach((li) => {
        let  queredLi = li.querySelector(".name").textContent.toLowerCase()
        if(queredLi.includes(inputValue)){
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
})



function createNewElement(){
    const newli = document.createElement("li")
    const firstSpanTag = document.createElement("span")
    const secondSpanTag = document.createElement("span")
    return {newli,firstSpanTag,secondSpanTag}
}

function  addCreatedElements(newli,firstSpanTag,secondSpanTag){
   newli.appendChild(firstSpanTag)
   newli.appendChild(secondSpanTag)
    booklist.appendChild(newli)
}

function inputvalues(firstSpanTag,secondSpanTag ,value){
    firstSpanTag.textContent=value
    secondSpanTag.textContent = "delete"
}
function styleNewElement(firstSpanTag,secondSpanTag){
firstSpanTag.classList.add("name")
secondSpanTag.classList.add("delete")

}