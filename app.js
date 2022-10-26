const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const menuItems = document.querySelectorAll("#hamburger div");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const moonBtn = document.querySelector("#moon");

//on click shows the mobile menu and changes hamburger btn bg color
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuItems.forEach(item => {
    if (item.classList.contains("bg-black")) {
      item.classList.remove("bg-black");
      item.classList.add("bg-white");
    } else {
      item.classList.remove("bg-white");
      item.classList.add("bg-black");
    }
  });
});

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

moonBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
