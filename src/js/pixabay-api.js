import axios from 'axios';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// import { loader } from '../main';
import { hideLoader } from './render-functions';

const PIXABAY_API_KEY = '49602919-aeba24ff5374aa13ccf20c3b1';
const PIXABAY_API_URL = 'https://pixabay.com/api/';
const PIXABAY_PARAMS = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  return axios
    .get(
      `${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${query}&image_type=${PIXABAY_PARAMS.image_type}&orientation=${PIXABAY_PARAMS.orientation}&safesearch=${PIXABAY_PARAMS.safesearch}`
  ).then(response => {
    if (response.data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
        timeout: 3000
      })
    }
    
    return response.data;
  })
    .catch(error => {
      console.error('Error fetching data from Pixabay:', error);
    })
  .finally(() => {
    hideLoader();
  });
  
 
}

