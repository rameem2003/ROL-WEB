const bannerSection = document.getElementById("banner")

// console.log(bannerSection);
const bannerPhotos = [
  "banner.jpg",
  "gallery0.jpg",
  "gallery1.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
];

window.onload = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  bannerSection.style.backgroundImage = `url('./assets/img/our_gallery/${bannerPhotos[randomNumber]}')`;
};
