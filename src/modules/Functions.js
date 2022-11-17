import Scores from './Scores.js';

const getScores = async () => {
  const data = await Scores.getData();
  return data.result;
};
const sendScore = async (data) => {
  const result = await Scores.postData(data);
  return result.result;
};
const render = (data) => {
  const listContent = document.querySelector('.list-content');
  listContent.innerHTML = '';
  data.forEach((item) => {
    const { user, score } = item;
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `${user}: ${score}`;
    listContent.appendChild(li);
  });
};
const showScores = () => {
  getScores().then((result) => render(result));
};

export {
  getScores,
  sendScore,
  render,
  showScores,
};