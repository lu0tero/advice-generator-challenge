/* Variables */
const adviceId = document.querySelector('#advice-id');
const phrase = document.querySelector('#phrase');
const diceBtn = document.querySelector('#dice-btn');

diceBtn.addEventListener('click', ()=> {
fetch(`https://api.adviceslip.com/advice`)

.then(response => response.json())
.then(data => {
    adviceId.innerText = `#${data['slip'].id}`
    phrase.innerText = `“${data['slip'].advice}”`
}) 

.catch(err => console.log("error"))
})