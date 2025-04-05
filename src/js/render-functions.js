// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
  //   console.log('createGallery', images);
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(({ webformatURL, largeImageURL, tags }) => {
      return `<li class="gallery-item"><a href="${webformatURL}">
            <img class="gallery-image" src="${largeImageURL}" alt="${tags}" />
        </a>
       
        </li>`;
    })
    .join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
// export function renderMarkup() {
//     const container = document.querySelector('.gallery');
//     const markup = createGallery(images);
//   container.insertAdjacentHTML('beforeend', markup);
// }

const lightbox = new SimpleLightbox('.gallery a', {});
