const menu = document.querySelector("header .menu");
const menuBtn = document.getElementById("tog");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
})


window.onscroll = () => {
    menu.classList.remove("active");
}


let date = new Date();


const footer = document.querySelector("footer");

footer.innerHTML = `
                    <div class="container">
                        <div class="upper-footer">
                            <h1>Republic of Legends</h1>
                            <h3>Follow Us</h3>
                            <div class="links">
                                <ul>
                                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="https://www.youtube.com/@we.are.republicoflegends2022"><i class="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="https://github.com/rol2022"><i class="fa-brands fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <hr>

                        <div class="lower-footer">
                            <h4>${date.getFullYear()} Team Republic of Legends. All Rights Resurved.</h4>
                        </div>
                    </div>
`;