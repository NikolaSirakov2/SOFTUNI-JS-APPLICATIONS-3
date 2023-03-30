function loadCommits() {
    let list = document.getElementById("commits");
    let username = document.getElementById("username");
    let repos = document.getElementById("repo");

    console.log(username);
    console.log(repos);


    let request = fetch(`https://api.github.com/repos/${username.value}/${repos.value}/commits`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data[0].commit.author.name);
                list.innerHTML= "";

                data.forEach(element => {
                    let el = document.createElement("li");
					let link = document.createElement("a");

					link.href = element.html_url;
					link.innerText = `${element.commit.author.name}: ${element.commit.message}`;

					el.appendChild(link);
					list.appendChild(el)
                })
            })

}