const menu = document.querySelector("header .menu");
const menuBtn = document.getElementById("tog");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
})


window.onscroll = () => {
    menu.classList.remove("active");
}


let date = new Date();

const lower_footer = document.querySelector(".lower-footer h4");

lower_footer.innerHTML = `${date.getFullYear()} Team Republic of Legends. All Rights Resurved.`