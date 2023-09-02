//login form
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};

//lightGallery
lightGallery(document.querySelector(".gallery .gallery-container"));

//navbar responsive
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

//close navbar and menu with scroll
window.onscroll = () => {
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
