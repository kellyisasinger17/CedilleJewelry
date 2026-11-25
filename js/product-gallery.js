const gallery = document.querySelector('.product-gallery');
const photos = [...gallery.querySelectorAll('.product-photos img')];
const [previous, next] = gallery.querySelectorAll('button');
let currentPhoto = 0;

function changePhoto(direction) {
  photos[currentPhoto].hidden = true;
  currentPhoto = (currentPhoto + direction + photos.length) % photos.length;
  photos[currentPhoto].hidden = false;
}

previous.addEventListener('click', () => changePhoto(-1));
next.addEventListener('click', () => changePhoto(1));
