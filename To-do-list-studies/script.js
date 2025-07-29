
// Array to store tasks
let tasks = [];

const diasSemana = {
    "Segunda": 1,
    "Terça": 2,
    "Quarta": 3,
    "Quinta": 4,
    "Sexta": 5,
    "Sábado": 6,
    "Domingo": 7
}

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

function renderTable() {
    tbody.innerHTML = "";

    // Sort tasks by day and start time
    tasks.sort((a, b) => {
        const dayA = diasSemana[a.day];
        const dayB = diasSemana[b.day];
    
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
            <td><i class="fa-solid fa-trash" data-index="${index}"></i></td>
        `;
        tbody.appendChild(row);
    });
}

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


loadTasks(); // Load tasks when the script runs