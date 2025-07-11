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