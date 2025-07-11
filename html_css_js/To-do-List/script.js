let btnAddTask = document.getElementById("openAddTaskModal");
let modalAddTask = document.getElementById("myModal");

btnAddTask.addEventListener("click", () => {
    console.log("Acionando Modal!");
    modalAddTask.style.display = "block";
});

let btnCloseModal = document.getElementById("closeAddTaskModal");

btnCloseModal.addEventListener("click", () => {
    console.log("Fechando Modal!");
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

    let newLine = document.createElement("tr");
    let task = {
        name: taskName.value,
        day: selectDay.value,
        start: startTime.value,
        end: endTime.value
    };

    if (task.name && task.day && task.start && task.end) {
        newLine.innerHTML = `
        <td>${++numberOfTasks}</td>
        <td>${task.name}</td>
        <td>${task.day}</td>
        <td>${task.start}</td>
        <td>${task.end}</td>
        <td><i class="fa-solid fa-trash"></i></td>
        `;
        tbody.appendChild(newLine);

        console.log("Tarefa adicionada:", task);
        modalAddTask.style.display = "none";
        // Aqui você pode adicionar a lógica para exibir a tarefa na lista
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Add 
tbody.addEventListener("click", (event) => {
    
    // Verify if the clicked element is a trash icon (has class "fa-trash")
    if(event.target.classList.contains("fa-trash")) {
        let linha = event.target.closest("tr"); // get the nearest line (tr)
        linha.remove();
        numberOfTasks--; // Decrement the task count
        atualizarNumeracao();
    }
});

// Função para atualizar os números após remoção
function atualizarNumeracao() {
    let linhas = tbody.querySelectorAll("tr");
    linhas.forEach((linha, index) => {
        linha.children[0].textContent = index + 1;
    });
}