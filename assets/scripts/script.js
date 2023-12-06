const bgSectionEl = document.querySelector('#bgc-scroll')

window.addEventListener("scroll", () => {
  bgSectionEl.style.opacity = 1 - window.scrollY / 800;
  bgSectionEl.style.backgroundSize = 150 - window.scrollY / 12 + "%";

})

