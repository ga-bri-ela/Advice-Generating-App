// API
const API_ENDPOINT = 'https://api.adviceslip.com/advice';

const adviceField = document.getElementById('adviceGenerated');
const button = document.getElementById('button-dice');
const adviceID = document.getElementById('adviceNumber');

const disableButton = () => {
    button.disabled = true;
};

const dataHandler = data => {
    adviceField.innerHTML = data.slip.advice;
    adviceID.innerHTML = data.slip.id;

};

const getAdvice = () => {

    fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => dataHandler(data));

};

button.addEventListener('click', getAdvice);
