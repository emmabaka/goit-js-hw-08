// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryMarkup = galleryItems
  .map(img => {
    return `<a class="gallery__item" href="${img.original}">
<img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
  })
  .join('');

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 200,
  captionsData: 'alt',
});
