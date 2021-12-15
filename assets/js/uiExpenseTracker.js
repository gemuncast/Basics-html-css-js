class UI {
    constructor() {
        this.uiContainer = document.getElementById("totalDisplay");
    }

    

    populatedUI(data) {

        var li = document.createElement("li"); 
        var inputValue = data;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("totalDisplay").appendChild(li);
        }
        document.getElementById("totalExp").innerHTML = parseFloat(document.getElementById('totalExp').innerHTML) + parseFloat(document.getElementById('newAmount').value)
        document.getElementById("newExpense").value = "";    
        document.getElementById("newAmount").value = "";     
        
        
    }

}