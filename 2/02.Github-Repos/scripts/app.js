function loadRepos() {
	let username = document.getElementById("username");
	let list = document.getElementById("repos");

	let request = fetch(`https://api.github.com/users/${username.value}/repos`)
			.then(response => {
				return response.json()
			})
			.then(data => {
				list.innerHTML = "";
				data.forEach(element => {
					let el = document.createElement("li");
					let link = document.createElement("a");

					link.href = element.html_url;
					link.innerText = element.full_name;

					el.appendChild(link);
					list.appendChild(el)
				});
			})
}