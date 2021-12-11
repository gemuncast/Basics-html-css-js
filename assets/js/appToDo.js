const ui = new UI();

const task = document.getElementById("newTask");
const btnAdd = document.getElementById("addTask");


btnAdd.addEventListener("click", () => {
    ui.populatedUI(task.value);
});