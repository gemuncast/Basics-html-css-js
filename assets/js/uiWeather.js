class UI {
    constructor(){
        this.uiContainer = document.getElementById("weatherInfo");
        this.city;
    }

    populatedUI(data){
        this.uiContainer.innerHTML = 
        `
        <h3>Weather Info</h3>
            <blockquote>
                <p id="cityInfo">City : ${data.name}</p>
                <p id="highInfo">Temperature : ${Math.round(data.main.temp - 273.15)}</p>
                <p id="lowInfo">Humidity : ${data.main.humidity} </p>
                <p id="detailsInfo">Brief Description : ${data.weather[0].description}</p>
            </blockquote>
            <div class="col-12">
            <ul class="actions">
                <li><a  id="btnClear" onClick="btnClear()" class="button small" >Clear</a></li>
            </ul>
        </div>
        `;
    }
}