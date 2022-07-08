const btn = document.getElementById('jokeBtn')
const joke = document.getElementById('joke')

btn.addEventListener('click', getAnotherJoke)

async function getAnotherJoke() {
	console.log('aaaaa')
	const config = {
	  headers: {
	    Accept: 'application/json',
	  },
	}
	
	const res = await fetch('https://icanhazdadjoke.com', config)
	
	const data = await res.json()
	
	console.log(data.joke)
	
	joke.innerHTML = data.joke
}