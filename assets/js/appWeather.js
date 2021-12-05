const ft = new Fetch();
const ui = new UI();

const search = document.getElementById("city-input");
const btn = document.getElementById("btnDemo");

btn.addEventListener("click", () => {
    const currentValue = search.value;

    ft.getCurrent(currentValue).then((data) => {
        ui.populatedUI(data);
    });
});

function btnClear(){
    document.getElementById('weatherInfo').innerHTML = "";
}
