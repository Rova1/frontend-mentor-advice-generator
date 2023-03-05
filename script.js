const btnQuote = document.getElementById('advice-btn');
const labelAdvice = document.getElementById('advice');
const labelId = document.getElementById('advice-id');

const getQuote = function () {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      labelAdvice.textContent = data.slip.advice;
      labelId.textContent = data.slip.id;
    });
};
getQuote();

btnQuote.addEventListener('click', getQuote);
