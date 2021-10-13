// generate two random numbers (one for the person and one for the computer)
const personNumber = Math.ceil(Math.random() * 6)
const computerNumber = Math.ceil(Math.random() * 6)

let message = ''

// determine the winner based on higher number
if (personNumber > computerNumber) {
    message = `Congratulazioni hai vinto contro il computer con un punteggio di (${personNumber} - ${computerNumber})`
} else if (personNumber < computerNumber) {
    message = `Hai perso contro il computer con un punteggio di (${personNumber} - ${computerNumber})`
} else {
    message = `Hai pareggiato con il computer con un punteggio di (${personNumber} - ${computerNumber})`
}
alert(message)

// adding the results to the DOM
const container = document.querySelector('.container')
const results = document.createElement('div')
results.textContent = message

const gif = (personNumber > computerNumber) ? '<iframe src="https://giphy.com/embed/Xw6yFn7frR3Y4" width="393" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>' : '<iframe src="https://giphy.com/embed/9Y5BbDSkSTiY8" width="480" height="336" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
const gifElement = document.createElement('div')
gifElement.innerHTML = gif

container.appendChild(results)
container.append(gifElement)