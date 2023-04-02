function lockedProfile() {
    
    
    let page = document.getElementById("main");

    async function getData(){
        let response = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
        let data = await response.json();
        let users = Object.values(data);

        users.forEach(user => {
            console.log(user);
            let card = document.createElement("div");

            card.innerHTML = 
            `<img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" id="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock" id="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${user.username}" disabled readonly />`

            let info = document.createElement("div");
            info.classList.add("user1Username")
            info.style.display = "none";
            
             info.innerHTML =  ` <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${user.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="${user.age}" disabled readonly />
            </div>`

            let butt = document.createElement("button");
            butt.innerText = "Show more";
            butt.id = "showMore";

            card.append(info, butt)

            card.classList.add("profile")

            page.appendChild(card)
        })
    }

    getData();

    let butt = document.getElementById("showMore")
    let container = document.getElementsByClassName("user1Username");

    butt.addEventListener("click", (e) => {
        
        console.log(container);

        if(butt.innerText !== "Hide it"){
            butt.innerText = "Hide it";
            // container.style.display = "block";
        } else {
            butt.innerText = "Show more"
        }
    })
}