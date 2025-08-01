const form = document.getElementById('postForm');
const feed = document.getElementById('feed');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageFile = document.getElementById('image').files[0];

  if (!imageFile) return;

  const imageURL = URL.createObjectURL(imageFile);

  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${imageURL}" alt="Imagen de publicación">
    <h3>${title}</h3>
    <p>${description}</p>
    <span class="like-btn">❤️ 0</span>
  `;

  const likeBtn = card.querySelector('.like-btn');
  let likes = 0;
  let liked = false;

  likeBtn.addEventListener('click', () => {
    liked = !liked;
    likes += liked ? 1 : -1;
    likeBtn.textContent = `❤️ ${likes}`;
    likeBtn.classList.toggle('liked', liked);
  });

  feed.prepend(card);

  form.reset();
});
