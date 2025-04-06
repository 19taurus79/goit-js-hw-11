import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, showLoader } from './js/render-functions';
const form = document.querySelector('.form');
// export const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();
  showLoader();
  const query = form.elements['search-text'].value;
  const data = getImagesByQuery(query);
  data.then(response => {
    createGallery(response.hits);
  });
  form.reset();
});