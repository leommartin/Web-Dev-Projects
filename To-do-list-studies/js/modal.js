// modal.js

import { saveTasks } from './storage.js';
import { renderTable } from './render.js';

export function setupModal(tasks) {
    const modalAddTask = document.getElementById("myModal");
    const btnAddTask = document.getElementById("openAddTaskModal");
    const btnCloseModal = document.getElementById("btnCloseAddTaskModal");
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
    
    // Open modal when the button is clicked
    btnAddTask.addEventListener("click", () => {
        modalAddTask.style.display = "block";
    });

    // Close modal when clicking outside or on the close button
    modalAddTask.addEventListener("click", (event) => {
        if (event.target === modalAddTask) {
            limparModal();
            modalAddTask.style.display = "none";
        }
    });

    // Close modal when the close button is clicked
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

            // Add the new task to the tasks array
            tasks.push(task);
            saveTasks(tasks);
            renderTable(tasks);
            limparModal();

            // Close the modal after adding the task
            modalAddTask.style.display = "none";

        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
}
