// Function to add todo
function handleFormSubmit(event){
    event.preventDefault();
    const todos = {
        enter: event.target.enter.value
    }
localStorage.setItem("dataEntered", JSON.stringify(todos));
getDataFromLocalStorage(todos);
    event.target.enter.value = " ";
}
function getDataFromLocalStorage(todos){
    const parentElem = document.getElementById("todoList");
    const listItems = document.createElement("li");
    listItems.textContent = todos.enter;
parentElem.appendChild(listItems);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("dataEntered");
    parentElem.removeChild(listItems);
})
listItems.appendChild(deleteBtn);


 const editBtn = document.createElement("button");
 editBtn.textContent = "Edit";
 editBtn.addEventListener("click", () => {
    localStorage.removeItem("dataEntered");
    parentElem.removeChild(listItems);

    document.getElementById("todoInput").value = todos.enter;
 })
 listItems.appendChild(editBtn);
}

 const search = document.getElementById("searchInput")
 search.addEventListener("input", () => {
    const searchTerm = search.value.toLowerCase();
    const todoItems = document.querySelectorAll("li");
    todoItems.forEach(items => {
        const text = items.textContent.toLowerCase();
        if(text.includes(searchTerm)){
            items.style.display = "block";
        }else{
            items.style.display = "none";
        }
    })
 })