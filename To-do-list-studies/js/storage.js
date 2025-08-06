// storage.js

export function loadTasks() {

    try {
        const data = localStorage.getItem("tarefas");
        
        // If no data is found or it's undefined, return an empty array
        if (!data || data === "undefined") return [];

        // Else parse the JSON string and return the tasks array
        return JSON.parse(data);

    } catch (error) {
        console.error("Erro ao carregar tarefas do localStorage:", error);
        return [];
    }
}

export function saveTasks(tasks) {
  localStorage.setItem("tarefas", JSON.stringify(tasks));
}
