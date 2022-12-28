const menu = document.querySelector("header .menu");
const menuBtn = document.getElementById("tog");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
})


window.onscroll = () => {
    menu.classList.remove("active");
}
