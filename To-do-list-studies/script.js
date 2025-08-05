
// Array to store tasks
let tasks = [];

const diasSemana = [
  { nome: "Segunda", valor: 1 },
  { nome: "Terça", valor: 2 },
  { nome: "Quarta", valor: 3 },
  { nome: "Quinta", valor: 4 },
  { nome: "Sexta", valor: 5 },
  { nome: "Sábado", valor: 6 },
  { nome: "Domingo", valor: 7 }
];

function loadTasks() {
    const storedTasks = localStorage.getItem("tarefas");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTable();
}

function saveTasks() {
    // Delete the existing tasks with the key "tarefas"
    // in localStorage and update using the same key
    localStorage.setItem("tarefas", JSON.stringify(tasks));
}

function horaParaMinutos(horaStr){
    const [h, m] = horaStr.split(":").map(Number);
    // Why use map? Because it converts the string to a number
    return h * 60 + m; // Convert hours to minutes and add minutes
}

// Function to return the value of the respective day
function getValorDoDia(dia) {
    const diaObj = diasSemana.find(d => d.nome === dia);
    return diaObj ? diaObj.valor : 0; // return 0 if day is not found
}


function renderTable() {
    tbody.innerHTML = "";

    // Sort tasks by day and start time
    tasks.sort((a, b) => {
        const dayA = getValorDoDia(a.day);
        const dayB = getValorDoDia(b.day);
        
        // Check if days are the same
        // If they are the same, check the start time
        // If they are the same, check the end time
        if(dayA !== dayB) {
           return dayA - dayB;
        }
        else if (horaParaMinutos(a.start) === horaParaMinutos(b.start)) {
            return horaParaMinutos(a.end) -  horaParaMinutos(b.end);
        } else {
            return horaParaMinutos(a.start) - horaParaMinutos(b.start);
        }
    })

    tasks.forEach((task, index) => {
        let row = document.createElement("tr");

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
            row.querySelectorAll("td:not(.icons)").forEach(td => {
                td.classList.add("task-completed");
            });
        }
        
        tbody.appendChild(row);
    });


    const containerTabelas = document.querySelector("#tabelasPorDia");
    containerTabelas.innerHTML = "";
    containerTabelas.classList.add("table-body");

    diasSemana.forEach(({nome}) => {
        const tarefasDoDia = tasks.filter(task => task.day === nome);

        if(tarefasDoDia.length > 0) {

            // Create a section with a title (day of the week)
            const section = document.createElement("section");
            const title = document.createElement("h2");
            title.textContent = nome;
            section.appendChild(title);

            // Create the table and fields
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
            
            // Iterate over the tasks and list each one
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
                    row.querySelectorAll("td:not(.icons)").forEach(td => {
                        td.classList.add("task-completed");
                    });
                }
                tbodyDia.appendChild(row); // All <tr> elements are children of tbody
            });

            table.innerHTML = thead;
            table.appendChild(tbodyDia);
            section.appendChild(table);

            containerTabelas.appendChild(section);
        }
    })
}

const toggleBtn = document.getElementById("toggleTabelasPorDia");
const tabelasDiv = document.getElementById("tabelasPorDia");
const titleDias = document.querySelector(".title-dias");

// Ocultar por padrão
titleDias.classList.add("hidden");

toggleBtn.addEventListener("click", () => {
  tabelasDiv.classList.toggle("expandido");
  titleDias.classList.toggle("hidden");

  toggleBtn.textContent = tabelasDiv.classList.contains("expandido")
    ? "Ocultar Tarefas por Dia"
    : "Mostrar Terafas por Dia";

});

let btnAddTask = document.getElementById("openAddTaskModal");
let modalAddTask = document.getElementById("myModal");

btnAddTask.addEventListener("click", () => {
    console.log("Acionando Modal!");
    modalAddTask.style.display = "block";
});

modalAddTask.addEventListener("click", (event) => {
    if(event.target === modalAddTask) {
        console.log("Fechando Modal!");
        limparModal(); // Clear the modal inputs when closing
        modalAddTask.style.display = "none";
    }
});

// Set value "" or defaylt value for the modal inputs when user click "Cancel"
function limparModal() {
    taskName.value = "";
    selectDay.value = "Segunda";  // ou qualquer valor padrão que você preferir
    startTime.value = "";
    endTime.value = "";
}

let btnCloseModal = document.getElementById("closeAddTaskModal");

btnCloseModal.addEventListener("click", () => {
    console.log("Fechando Modal!");
    limparModal(); // Clear the modal inputs when closing
    modalAddTask.style.display = "none";
})

let taskName = document.getElementById("taskName");
let selectDay = document.getElementById("dayOfWeek");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let btnAddTaskModal = document.getElementById("btnAddTaskModal");

let tbody = document.querySelector(".table-body");
let numberOfTasks = tbody.children.length;

btnAddTaskModal.addEventListener("click", () => {

    // let newLine = document.createElement("tr");
    let task = {
        name: taskName.value,
        day: selectDay.value,
        start: startTime.value,
        end: endTime.value
    };

    if (task.name && task.day && task.start && task.end) {
        tasks.push(task);
        saveTasks(); // Save tasks to localStorage
        loadTasks(); // Reload tasks to update the table

        console.log("Tarefa adicionada:", task);

        // let tasks_arm = localStorage.getItem("tarefas");
        // console.log("Tarefas armazenadas:", tasks_arm);
        
        limparModal(); // Clear the modal inputs
        modalAddTask.style.display = "none";
    } else {
        alert("Por favor, preencha todos os campos.");
    }

    
});

tbody.addEventListener("click", (event) => {

    // Verify if the clicked element is a trash icon (has class "fa-trash")
    if(event.target.classList.contains("fa-trash")) {
        const index = event.target.getAttribute("data-index");
        tasks.splice(index, 1); // Remove the task from the array
        saveTasks();
        renderTable();
    }
});

tbody.addEventListener("click", (event) => {

    // Verify if the clicked element is a trash icon (has class "fa-trash")
    if(event.target.classList.contains("fa-clipboard-check")) {
        const index = event.target.getAttribute("data-index");
        console.log("Task completed:", tasks[index]);

        // Search the <tr> element that contains the clicked icon
        // const row = event.target.closest("tr");
        // row.classList.toggle("task-completed"); // Toggle the completed class

        tasks[index].completed = !tasks[index].completed;

        saveTasks();
        renderTable();
    }
});

document.getElementById("tabelasPorDia").addEventListener("click", (event) => {
    
    // Check if the clicked element is a trash icon or check icon
    const isTrash = event.target.classList.contains("fa-trash");
    const isCheck = event.target.classList.contains("fa-clipboard-check");

    if (isTrash || isCheck) {
        // Get the index of the task from the clicked icon
        // using the data-index attribute
        const index = event.target.getAttribute("data-index");
        
        // Get the day from the closest section element
        // that contains the clicked icon
        // and the <h2> element with the day name
        const day = event.target.closest("section")?.querySelector("h2")?.textContent;

        if (!day || index === null) return;

        // Filter tasks to find the task for the specific day
        const tarefasDoDia = tasks.filter(task => task.day === day);
        const tarefaAlvo = tarefasDoDia[index];
        
        // Find the global position of the task in the tasks array
        // This returns the index of the task in the global tasks array
        const posicaoGlobal = tasks.findIndex(t => t === tarefaAlvo);

        // The global position is important to remove the task or toggle the completed status
        if (posicaoGlobal !== -1) {
            if (isTrash) {
                tasks.splice(posicaoGlobal, 1);
                // Remove the task from the global tasks array
            } else if (isCheck) {
                tasks[posicaoGlobal].completed = !tasks[posicaoGlobal].completed;
                // !tasks... // Toggle the completed status of the task
            }

            saveTasks();
            renderTable();
        }
    }
});


loadTasks(); // Load tasks when the script runs