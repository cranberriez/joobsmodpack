function smoothScroll(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const imageGallery = document.getElementById('image-gallery');
const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let imageIndex = 0;
let imagesLoaded = 0;
let imageChangeTimeout;

const images = [
  './gallery/ad-astra.png',
  './gallery/betterend.png',
  './gallery/betternether.webp',
  './gallery/botania.webp',
  './gallery/deepdark.webp',
  './gallery/dungeons1.png',
  './gallery/dungeons2.png',
  './gallery/ind-rev.gif',
  './gallery/info-create.jpg',
  './gallery/info-mysticalag.webp',
  './gallery/mod-ind.webp',
  './gallery/spectrum.png',
  './gallery/tectonic.png',
  './gallery/Terralith.webp',
  './gallery/twilightforest.png'
  // add as many images as you like
];

const preloadImages = (srcs, allImagesLoaded) => {
  let img;
  for (let i = 0; i < srcs.length; i++) {
    img = new Image();
    img.onload = function() {
      imagesLoaded++;
      if (imagesLoaded == srcs.length) {
        allImagesLoaded();
      }
    };
    img.src = srcs[i];
  }
};

preloadImages(images, () => {
    galleryImage.src = images[0];
    startImageChangeTimeout();
});

const startImageChangeTimeout = () => {
    if (imageChangeTimeout) clearTimeout(imageChangeTimeout);
    imageChangeTimeout = setTimeout(nextImage, 10000); // rotate images every 10 seconds
};
  

const nextImage = () => {
    imageIndex = (imageIndex + 1) % images.length;
    changeImage();
};
  
const prevImage = () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    changeImage();
};
  
const changeImage = () => {
    clearTimeout(imageChangeTimeout);
    galleryImage.style.opacity = 0;
    setTimeout(() => {
      galleryImage.src = images[imageIndex];
      galleryImage.style.opacity = 1;
      startImageChangeTimeout();
    }, 400); // Timeout between image fading and next image appearing
};
  
prevButton.onclick = prevImage;
nextButton.onclick = nextImage;