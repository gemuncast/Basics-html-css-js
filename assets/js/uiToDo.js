class UI {
    constructor() {
        this.uiContainer = document.getElementById("ToDoAppDisplay");
    }

    populatedUI(data) {

        var li = document.createElement("li"); 
        var inputValue = data;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("ToDoAppDisplay").appendChild(li);
        }
        document.getElementById("newTask").value = "";

    }
}