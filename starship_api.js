
const peoples = 
async function peoples() {
  const resp = await fetch('https://swapi.co/api/people/')
  const users = await resp.json();
  console.log (users)
}

fetch('https://swapi.co/api/people/')
	.then(resp =>resp.json())
	.then(console.log)