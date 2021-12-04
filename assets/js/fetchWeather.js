class Fetch{
    async getCurrent(input){

        const myKey = "43133bffcb20ce0c1379a7677b62a218        ";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json()

        console.log(data);

        return data;
    }
}