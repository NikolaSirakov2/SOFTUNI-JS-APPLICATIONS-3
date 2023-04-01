function solve() {
    let arriveButt = document.getElementById("arrive");
    let departButt = document.getElementById("depart");
    let info = document.getElementById("info");
    let id = "depot";
    let stop = "";

    function depart() {
        departButt.disabled = true;
        arriveButt.disabled = false;
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data.next);

                info.innerText = `Next stop ${data.name}`;
                stop = data.name;
                id = data.next;
            })
    }   

    function arrive() {
        departButt.disabled = false;
        arriveButt.disabled = true;
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.next);

            info.innerText = `Arrive at ${stop}`;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();