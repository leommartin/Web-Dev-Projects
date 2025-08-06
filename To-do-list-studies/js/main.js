import { loadTasks, saveTasks } from "./storage.js";
import { renderTable } from './render.js';
import { setupModal } from './modal.js';

let tasks = loadTasks(); // Load tasks from localStorage
renderTable(tasks);      // Render tasks on the screen
setupModal(tasks);       // Activate modal events

const toggleBtn = document.getElementById("toggleTabelasPorDia");
const tabelasDiv = document.getElementById("tabelasPorDia");
const titleDias = document.querySelector(".title-dias");

// Hide the title "Tabelas por Dia da Semana" by default
titleDias.classList.add("hidden");

toggleBtn.addEventListener("click", () => {

    tabelasDiv.classList.toggle("expandido");   // Toggle tables visibility
    titleDias.classList.toggle("hidden");       // Toggle title visibility

    // Update button text based on current state
    toggleBtn.textContent = tabelasDiv.classList.contains("expandido")
        ? "Ocultar Tarefas por Dia"
        : "Mostrar Tarefas por Dia";
});

// A single listener that handles task deletion and completion
document.addEventListener("click", (event) => {

    const isTrash = event.target.classList.contains("fa-trash");
    const isCheck = event.target.classList.contains("fa-clipboard-check");

    if (!isTrash && !isCheck) return;

    if(isTrash) console.log("Delete task");
    if(isCheck) console.log("Toggle task completion");

    // Get the task id and day from data attributes
    const index = event.target.getAttribute("data-index");
    const day = event.target.closest("section")?.querySelector("h2")?.textContent;

    let posicaoGlobal;

    // If day or index is not found, exit the functions
    // if (!day || index === null) return;
    
    if(day) {
        
        // Get tasks of the specific day and find the target task
        const tarefasDoDia = tasks.filter(task => task.day === day);
        const tarefaAlvo = tarefasDoDia[index];

        // Find the global index of the target task
        posicaoGlobal = tasks.findIndex(t => t === tarefaAlvo);
    } else
    {
        posicaoGlobal = index;
    }   

    // If posicaoGlobal has a valid index, proceed with deletion or toggling completion
    if (posicaoGlobal !== -1) {

        if (isTrash) {
            tasks.splice(posicaoGlobal, 1);
        } else if (isCheck) {
            tasks[posicaoGlobal].completed = !tasks[posicaoGlobal].completed;
        }

        saveTasks(tasks);
        renderTable(tasks);
    }
});
