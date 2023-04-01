function getInfo() {
            let idInput = document.getElementById('stopId');
            let id = idInput.value;
            let stopName = document.getElementById("stopName");
            let busses = document.getElementById("buses");

            // stopName.innerHTML = "";
            // busses.innerHTML = "";
            

           fetch(`http://localhost:3030/jsonstore/bus/businfo/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                stopName.innerText = "";
                busses.innerHTML = "";

                let bus = Object.values(data)[0]
                console.log(Object.entries(bus));

                stopName.innerText = data.name;

                for(let i = 0; i < Object.entries(bus).length; i++){
                    console.log(Object.entries(bus)[i]);
                    let li = document.createElement("li");
                    let busId = Object.entries(bus)[i][0];
                    let time = Object.entries(bus)[i][1];

                    li.innerText = `Bus ${busId} arrives in ${time} minutes`;

                    busses.appendChild(li)
                }


                
            })
            .catch(error => {
                stopName.innerText = "";
                busses.innerHTML = "";
                stopName.innerText = "Error"
            })

            idInput.value = "";
}

