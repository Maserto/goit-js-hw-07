import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('ul.gallery');
console.log(galleryRef)

const galleryMarkup = galleryItems.map(({preview , original, description }) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener('click', onGalleryClick,)

function onGalleryClick (e) {
    e.preventDefault();
if (e.target === e.currentTarget) return;


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

}

