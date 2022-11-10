import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('div.gallery');

const galleryMarkup = galleryItems.map( item => `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt='${item.description}'
  />
</a>
</div>` ).join('');

galleryRef.innerHTML = galleryMarkup;


galleryRef.addEventListener('click', onGalleryClick,)

function onGalleryClick (e) {
    e.preventDefault();
if (e.target === e.currentTarget) return;

const instance = basicLightbox.create(`
    <div class="modal">
        <img src = '${e.target.dataset.source}' alt ='${e.target.dataset.alt}'/> 
    </div>
` , {
    onShow: () => {
        window.addEventListener('keyup', onCloseModalKeyUp);
    },
    onClose: () => {
        window.removeEventListener('keyup', onCloseModalKeyUp);
    },
})
instance.show()

function onCloseModalKeyUp(e) {

    if (e.code !== 'Escape') return;
   instance.close();
}
}



