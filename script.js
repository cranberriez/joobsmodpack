function smoothScroll(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const imageGallery = document.getElementById('image-gallery');
const galleryImage = document.getElementById('gallery-image');
let imageIndex = 0;
let imagesLoaded = 0;

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
  setInterval(nextImage, 10000); // rotate images every 3 seconds
});

const nextImage = () => {
  imageIndex = (imageIndex + 1) % images.length;
  galleryImage.style.opacity = 0;
  setTimeout(() => {
    galleryImage.src = images[imageIndex];
    galleryImage.style.opacity = 1;
  }, 1000);
};