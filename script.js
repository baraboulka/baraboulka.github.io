document.querySelector(".menu__arr").addEventListener("click", () => {
  document.querySelector(".menu__navbar").classList.add("menu-clicked");
});

document.querySelector(".introduction-text").addEventListener("click", () => {
  document.querySelector(".menu__navbar").classList.remove("menu-clicked");
});
