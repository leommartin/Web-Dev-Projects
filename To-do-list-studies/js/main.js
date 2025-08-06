import { loadTasks, saveTasks } from "./storage.js";
import { renderTable } from './render.js';
import { setupModal } from './modal.js';

let tasks = loadTasks(); // Carrega do localStorage
renderTable(tasks);      // Renderiza as tarefas na tela
setupModal(tasks);       // Ativa os eventos do modal

const toggleBtn = document.getElementById("toggleTabelasPorDia");
const tabelasDiv = document.getElementById("tabelasPorDia");
const titleDias = document.querySelector(".title-dias");

// Oculta a seção por padrão
titleDias.classList.add("hidden");

toggleBtn.addEventListener("click", () => {
  tabelasDiv.classList.toggle("expandido");
  titleDias.classList.toggle("hidden");

  toggleBtn.textContent = tabelasDiv.classList.contains("expandido")
    ? "Ocultar Tarefas por Dia"
    : "Mostrar Tarefas por Dia";
});

// Um único listener que trata exclusão e conclusão de tarefas
document.addEventListener("click", (event) => {
  const isTrash = event.target.classList.contains("fa-trash");
  const isCheck = event.target.classList.contains("fa-clipboard-check");

  if (!isTrash && !isCheck) return;

  const index = event.target.getAttribute("data-index");
  const day = event.target.closest("section")?.querySelector("h2")?.textContent;

  if (!day || index === null) return;

  const tarefasDoDia = tasks.filter(task => task.day === day);
  const tarefaAlvo = tarefasDoDia[index];

  const posicaoGlobal = tasks.findIndex(t => t === tarefaAlvo);

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
