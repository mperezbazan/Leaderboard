import './style.css';
import { sendScore, showScores } from './modules/Functions.js';
import { message, form, refreshButton } from './modules/Variables.js';

refreshButton.addEventListener('click', () => {
  showScores();
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, score } = e.target;
  const newData = {
    user: name.value,
    score: parseInt(score.value, 10),
  };
  sendScore(newData).then((result) => {
    message.classList.remove('display-none');
    message.innerHTML = `${result} <br>Click on Refresh to update the list`;
    name.value = '';
    score.value = '';
    showScores();
    setTimeout(() => {
      message.classList.add('display-none');
    }, 5000);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  showScores();
});