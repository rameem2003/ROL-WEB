const menu = document.querySelector("header .menu");
const menuBtn = document.getElementById("tog");

const bannerSection = document.querySelector(".banner")

// console.log(bannerSection);
const bannerPhotos = ["banner.jpg", "gallery0.jpg", "gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg"];

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
})


window.onscroll = () => {
    menu.classList.remove("active");
}

window.onload = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber);


    bannerSection.style.backgroundImage = `url('./assets/img/our_gallery/${bannerPhotos[randomNumber]}')`
}