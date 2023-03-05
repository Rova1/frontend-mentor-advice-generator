const btnQuote = document.getElementById('advice-btn');
const labelAdvice = document.getElementById('advice');
const labelId = document.getElementById('advice-id');
const CtrError = document.getElementById('fetch-error-ctr');
const labelError = document.getElementById('fetch-error');

const getQuote = function () {
  CtrError.classList.add('hidden');
  fetch('https://api.adviceslip.com/advice')
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(data => {
      labelAdvice.textContent = data.slip.advice;
      labelId.textContent = data.slip.id;
    })
    .catch(err => {
      CtrError.classList.remove('hidden');
      labelError.textContent = `An error occurred while getting advice: ${err.message}`;
    });
};
getQuote();

btnQuote.addEventListener('click', getQuote);
