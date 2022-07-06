const bars_btn = document.getElementById("bars-icon");
const navbar = document.getElementById("navbar");
const main = document.getElementById("content");
const menu_bg = document.getElementById("menu-bg");

bars_btn.addEventListener("click", () => {
  console.log("hi, you pressed the bar button");
  if (navbar.classList.contains("deploy")) {
    navbar.classList.remove("deploy");
    main.classList.remove("display-none");
  } else {
    navbar.classList.add("deploy");
    main.classList.add("display-none");
  }
});
