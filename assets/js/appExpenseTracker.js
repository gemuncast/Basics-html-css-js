const ui = new UI();

const expense = document.getElementById("newExpense");
const btnExp = document.getElementById("addExpense");


btnExp.addEventListener("click", () => {
    ui.populatedUI(expense.value);
});