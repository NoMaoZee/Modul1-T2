// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteTask">Delete</button>
        `;
    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.remove();
  }
});

taskList.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "SPAN") {
    const newTask = prompt("Edit your task:", e.target.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      e.target.textContent = newTask;
    }
  }
});
