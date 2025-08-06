// storage.js

export function loadTasks() {
  try {
    const data = localStorage.getItem("tarefas");
    
    // Garante que não parseia "undefined", null ou string inválida
    if (!data || data === "undefined") return [];

    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao carregar tarefas do localStorage:", error);
    return [];
  }
}

export function saveTasks(tasks) {
  localStorage.setItem("tarefas", JSON.stringify(tasks));
}
