// render.js

import { diasSemana, horaParaMinutos, getValorDoDia } from './utils.js';

export function renderTable(tasks) {

    const tbody = document.querySelector(".table-body");
    tbody.innerHTML = ""; // Reset table body

    // Sort tasks by day and time in ascending order
    tasks.sort((a, b) => {
        
        // Each day has a numeric value for sorting 
        const dayA = getValorDoDia(a.day);
        const dayB = getValorDoDia(b.day);

        if (dayA !== dayB) return dayA - dayB;

        if (horaParaMinutos(a.start) === horaParaMinutos(b.start)) {
            return horaParaMinutos(a.end) - horaParaMinutos(b.end);
        }
        return horaParaMinutos(a.start) - horaParaMinutos(b.start);
    });

    // Render main table
    tasks.forEach((task, index) => {

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.name}</td>
            <td>${task.day}</td>
            <td>${task.start}</td>
            <td>${task.end}</td>
            <td class="icons">
                <i class="fa-solid fa-trash" data-index="${index}"></i>
                <i class="fa-solid fa-clipboard-check" data-index="${index}"></i>
            </td>
        `;
        
        // If the task is completed, add a class to style it
        if (task.completed) {

            // Add a class to all cells except the icons cell
            row.querySelectorAll("td:not(.icons)").forEach(td =>
                td.classList.add("task-completed")
            );
        }
        tbody.appendChild(row);
    });

    // Render tables by day
    const containerTabelas = document.querySelector("#tabelasPorDia"); // div for daily tables
    containerTabelas.innerHTML = "";
    containerTabelas.classList.add("table-body");

    diasSemana.forEach(({ nomeDia }) => {

        // Get tasks for the specific day
        const tarefasDoDia = tasks.filter(task => task.day === nomeDia);

        // If there are tasks for the day, create a section with a table
        if (tarefasDoDia.length > 0) {

            // Create a section for the day with its title and table
            const section = document.createElement("section");
            const title = document.createElement("h2");

            title.textContent = nomeDia;
            section.appendChild(title);

            // Create a table for the tasks of each day
            const table = document.createElement("table");
            table.classList.add("listTable");

            // Header for the daily table
            const thead = `
                <thead class="table-header">
                    <tr>
                        <th>#</th>
                        <th>Nome da tarefa</th>
                        <th>Início</th>
                        <th>Término</th>
                        <th>Ações</th>
                    </tr>
                </thead>
            `;

            // Body for the daily table
            const tbodyDia = document.createElement("tbody");

            // Populate the daily table with tasks
            tarefasDoDia.forEach((task, index) => {

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${task.name}</td>
                    <td>${task.start}</td>
                    <td>${task.end}</td>
                    <td class="icons">
                        <i class="fa-solid fa-trash" data-index="${index}"></i>
                        <i class="fa-solid fa-clipboard-check" data-index="${index}"></i>
                    </td>
                `;

                // If the task is completed, add a class to style it
                if (task.completed) {
                    row.querySelectorAll("td:not(.icons)").forEach(td =>
                        td.classList.add("task-completed")
                    );
                }

                tbodyDia.appendChild(row);
            });

            // Internally append the header and body to the table
            table.innerHTML = thead;
            table.appendChild(tbodyDia);

            // Append the table to the section and then to the container (div for daily tables)
            // Each section has a specific day and its tasks
            section.appendChild(table);
            containerTabelas.appendChild(section);
        }
    });
}
