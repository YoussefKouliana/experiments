const form = document.querySelector(".todolist");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    return alert("Enter a task");
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskItemContent = `
    <p>${taskInput.value}</p> `;

  taskItem.innerHTML = taskItemContent;
  taskList.appendChild(taskItem);
  taskInput.value = "";

 
}


