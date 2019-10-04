document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const filmItem = createFilmItem(event.target);
  const film = document.querySelector('#film');
  film.appendChild(filmItem);

  event.target.reset();
}

const createFilmItem = function (form) {
  const filmItem = document.createElement('li');
  filmItem.classList.add('film-item');

  const title = document.createElement('p');
  title.textContent = form.title.value;
  filmItem.appendChild(title);

  const director = document.createElement('p');
  director.textContent = form.director.value;
  filmItem.appendChild(director);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  filmItem.appendChild(genre);

  const rating = document.createElement('p');
  rating.textContent = form.rating.value;
  filmItem.appendChild(rating);

  return filmItem;
}

const handleDeleteAllClick = function (event) {
  const film = document.querySelector('#film');
  film.innerHTML = '';
}
