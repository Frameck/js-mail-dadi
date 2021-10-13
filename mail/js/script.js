const validMails = ['ultron@gmail.com', 'thanos@gmail.com', 'spiderman@gmail.com', 'starlord@gmail.com']
const userMail = prompt('Inserisci il tuo indirizzo mail')

let message = ''
let canAccess = false   // global variable to check if the user can access or not

for (let i = 0; i < validMails.length; i++) {
    const currentMail = validMails[i];
    if (userMail.toLowerCase() === currentMail.toLowerCase()) {
        canAccess = true
    }
}

if (canAccess) {
    message = 'Puoi accedere'
} else {
    message = 'Ci dispiace, non è consentito l\'accesso con questo indirizzo mail'
}

alert(message)


// adding the results to the DOM
const container = document.querySelector('.container')
const results = document.createElement('div')
results.textContent = message

container.appendChild(results)