const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const clearCompletedBtn = document.querySelector("#clear-completed");
const filters = document.querySelectorAll(".filters button");
const template = document.querySelector("#task-template");

let filter = "all";

const tasks = [
  {
    id: 1,
    title: "Tarefa 1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarefa 2",
    completed: true,
  },
  {
    id: 3,
    title: "Tarefa 3",
    completed: false,
  },
];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const stored = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(0, tasks.length, ...stored);
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    const emptyMsg = document.createElement("li");
    emptyMsg.classList.add("empty-message");

    if (tasks.length === 0) {
      emptyMsg.textContent = "Nenhuma tarefa adicionada.";
    } else if (filter === "pending") {
      emptyMsg.textContent = "Nenhuma tarefa pendente.";
    } else if (filter === "completed") {
      emptyMsg.textContent = "Nenhuma tarefa completada.";
    } else {
      emptyMsg.textContent = "Nenhuma tarefa encontrada.";
    }

    taskList.appendChild(emptyMsg);
    updateCount();
    return;
  }

  filteredTasks.forEach((task) => {
    const taskElement = template.content.firstElementChild.cloneNode(true);

    const checkbox = taskElement.querySelector("input[type='checkbox']");
    const span = taskElement.querySelector("span");
    const editButton = taskElement.querySelector(".edit");
    const removeButton = taskElement.querySelector(".remove");

    taskElement.classList.toggle("completed", task.completed);

    span.textContent = task.title;
    checkbox.checked = task.completed;
    
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      taskElement.classList.toggle("completed", task.completed);
      saveTasks();
      renderTasks();
    });

    editButton.addEventListener("click", () => {
      span.contentEditable = true;
      span.focus();

      span.addEventListener("blur", () => {
        span.contentEditable = false;
        task.title = span.textContent.trim();
        saveTasks();
      }, { once: true });
    });

    removeButton.addEventListener("click", () => {
      if (confirm("Deseja realmente excluir esta tarefa?")) {
        const index = tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      }
    });

    taskList.appendChild(taskElement);
  });

  updateCount();
}

function updateCount() {
  const pending = tasks.filter((t) => !t.completed).length;
  taskCount.textContent = `${pending} tarefas pendentes`;
}

addTaskBtn.addEventListener("click", () => {
  const title = taskInput.value.trim();

  if (!title) return;

  tasks.push({ id: Date.now(), title: title, completed: false });
  taskInput.value = "";
  taskInput.focus();
  
  saveTasks();
  renderTasks();
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderTasks();
  });
});

clearCompletedBtn.addEventListener("click", () => {
  const filtered = tasks.filter((t) => !t.completed);
  tasks.splice(0, tasks.length, ...filtered);
  saveTasks();
  renderTasks();
});

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  renderTasks();
});