function lockedProfile() {
  let page = document.getElementById("main");

  async function getData() {
    let response = await fetch(
      "http://localhost:3030/jsonstore/advanced/profiles"
    );
    let data = await response.json();
    let users = Object.values(data);

    users.forEach((user) => {
      let card = document.createElement("div");
      card.style.width = "190px";

      card.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" id="lock">
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock" id="unlock" checked><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${user.username}" disabled readonly />`;

      let info = document.createElement("div");
      info.classList.add("user1Username");

      info.style.visibility = "hidden";

      info.innerHTML = ` <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${user.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="${user.age}" disabled readonly />
            </div>`;

      let butt = document.createElement("button");
      butt.innerText = "Show more";
      butt.id = "showMore";

      let radio = document.querySelector('input[name="user1Locked"]:checked');
      let locked = document.getElementById("lock");

      butt.addEventListener("click", (e) => {
        console.log(radio.value);
        console.log(locked.checked);

        if (radio.value !== "lock" && locked.checked !== true) {
          if (butt.innerText !== "Hide it") {
            locked.setAttribute("checked", "checked");
            butt.innerText = "Hide it";
            info.style.visibility = "visible";
          } else {
            butt.innerText = "Show more";
            info.style.visibility = "hidden";
          }
        }
      });

      card.append(info, butt);

      card.classList.add("profile");

      page.appendChild(card);
    });
  }

  getData();

  let butt = document.getElementById("showMore");
}
