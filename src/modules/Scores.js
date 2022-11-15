const Scores = (data) => {
  const listContent = document.querySelector('.list-content');
  data.forEach((item) => {
    const { name, score } = item;
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `${name}: ${score}`;
    listContent.appendChild(li);
  });
};
export default Scores;