const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;


let tasks: string[] = [];

function addTask() {
  const task = taskInput.value.trim();

  if (task) {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}
