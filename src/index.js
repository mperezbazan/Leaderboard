import './style.css';
import Scores from './modules/Scores.js';

const message = document.querySelector('.message');
const getScores = async () => {
  const data = await Scores.getData();
  return data.result;
};
const sendScore = async (data) => {
  const result = await Scores.postData(data);
  return result.result;
};
const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', () => {
  getScores().then((result) => Scores.render(result));
});

const form = document.querySelector('form');
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
    getScores().then((result) => Scores.render(result));
    setTimeout(() => {
      message.classList.add('display-none');
    }, 5000);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  getScores().then((result) => Scores.render(result));
});