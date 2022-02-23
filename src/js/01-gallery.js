
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createImagesMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createImagesMarkup(img) {
    return img.map(item =>
        `<a class="gallery__item" 
        href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}" />
        </a>`
    ).join('');
}

    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
        captionsData: "alt";
        captionDelay: "250";
});

console.log(galleryItems);
