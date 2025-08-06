// modal.js

import { saveTasks } from './storage.js';
import { renderTable } from './render.js';

export function setupModal(tasks) {
  const modalAddTask = document.getElementById("myModal");
  const btnAddTask = document.getElementById("openAddTaskModal");
  const btnCloseModal = document.getElementById("closeAddTaskModal");
  const btnAddTaskModal = document.getElementById("btnAddTaskModal");

  const taskName = document.getElementById("taskName");
  const selectDay = document.getElementById("dayOfWeek");
  const startTime = document.getElementById("startTime");
  const endTime = document.getElementById("endTime");

  function limparModal() {
    taskName.value = "";
    selectDay.value = "Segunda";
    startTime.value = "";
    endTime.value = "";
  }

  btnAddTask.addEventListener("click", () => {
    modalAddTask.style.display = "block";
  });

  modalAddTask.addEventListener("click", (event) => {
    if (event.target === modalAddTask) {
      limparModal();
      modalAddTask.style.display = "none";
    }
  });

  btnCloseModal.addEventListener("click", () => {
    limparModal();
    modalAddTask.style.display = "none";
  });

  btnAddTaskModal.addEventListener("click", () => {
    const task = {
      name: taskName.value,
      day: selectDay.value,
      start: startTime.value,
      end: endTime.value
    };

    if (task.name && task.day && task.start && task.end) {
      tasks.push(task);
      saveTasks(tasks);
      renderTable(tasks);
      limparModal();
      modalAddTask.style.display = "none";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}
