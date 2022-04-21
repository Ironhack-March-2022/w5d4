
const getData = input => {
	// make a request to the rick and morty api 
	// axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`)
	// 	.then(response => {
	// 		console.log(response.data.results[0])
	// 		const character = response.data.results[0]
	// 		// update the dom
	// 		document.querySelector('h3').innerText = character.name
	// 		document.querySelector('img').setAttribute('src', character.image)

	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})

	// http request using fetch (you don't have to install anything in the browser)
	fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
		.then(response => response.json())
		.then(data => console.log(data));
}

document.querySelector('button').addEventListener('click', () => {
	const input = document.querySelector('#character').value
	console.log(input)
	getData(input)
})