import './style.css';

const data = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 42 },
];

const listContent = document.querySelector('.list-content');
data.forEach((item) => {
  const { name, score } = item;
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.innerHTML = `${name}: ${score}`;
  listContent.appendChild(li);
});