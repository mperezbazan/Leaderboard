const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
export default class Scores {
  static render(data) {
    const listContent = document.querySelector('.list-content');
    listContent.innerHTML = '';
    data.forEach((item) => {
      const { user, score } = item;
      const li = document.createElement('li');
      li.classList.add('list-item');
      li.innerHTML = `${user}: ${score}`;
      listContent.appendChild(li);
    });
  }

  static getData = async () => {
    const result = await fetch(`${endpoint}${process.env.API_KEY}/scores/`).then((data) => data.json());
    return result;
  }

  static postData = async (data) => {
    const result = await fetch(`${endpoint}${process.env.API_KEY}/scores/`, {
      method: 'POST',
      type: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
    return result;
  }
}