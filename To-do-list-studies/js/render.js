// render.js

import { diasSemana, horaParaMinutos, getValorDoDia } from './utils.js';

export function renderTable(tasks) {
    const tbody = document.querySelector(".table-body");
    tbody.innerHTML = "";

    // Ordenar tarefas
    tasks.sort((a, b) => {
        const dayA = getValorDoDia(a.day);
        const dayB = getValorDoDia(b.day);

        if (dayA !== dayB) return dayA - dayB;
        if (horaParaMinutos(a.start) === horaParaMinutos(b.start)) {
            return horaParaMinutos(a.end) - horaParaMinutos(b.end);
        }
        return horaParaMinutos(a.start) - horaParaMinutos(b.start);
    });

    // Renderizar tabela principal
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
        if (task.completed) {
            row.querySelectorAll("td:not(.icons)").forEach(td =>
                td.classList.add("task-completed")
            );
        }
        tbody.appendChild(row);
    });

    // Renderizar tabelas por dia
    const containerTabelas = document.querySelector("#tabelasPorDia");
    containerTabelas.innerHTML = "";
    containerTabelas.classList.add("table-body");

    diasSemana.forEach(({ nomeDia }) => {
        const tarefasDoDia = tasks.filter(task => task.day === nomeDia);
        if (tarefasDoDia.length > 0) {
            const section = document.createElement("section");
            const title = document.createElement("h2");
            title.textContent = nomeDia;
            section.appendChild(title);

            const table = document.createElement("table");
            table.classList.add("listTable");

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
            const tbodyDia = document.createElement("tbody");

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
                if (task.completed) {
                    row.querySelectorAll("td:not(.icons)").forEach(td =>
                        td.classList.add("task-completed")
                    );
                }
                tbodyDia.appendChild(row);
            });

            table.innerHTML = thead;
            table.appendChild(tbodyDia);
            section.appendChild(table);
            containerTabelas.appendChild(section);
        }
    });
}
