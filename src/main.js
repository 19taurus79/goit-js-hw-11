import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.elements['search-text'].value;
  const data = getImagesByQuery(query);
  data.then(response => {
    createGallery(response.hits);
  });
  console.log('data', data);
  //   console.log(
  //     data.then(response => {
  //       console.log(response);
  //     })
  //   );
  console.log(query);
  console.log(data);
  createGallery(data.hits);
  form.reset();
});

// console.log(
//   data.then(response => {
//     console.log(response);
//   })
// );
