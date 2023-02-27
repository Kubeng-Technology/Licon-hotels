const firstAbout = document.querySelector("section.first-about-details");
const secondAbout = document.querySelector("section.second-about-details");
const firstAboutCloseButton = document.querySelector(
  "button.about-first-btn > span"
);
const secondAboutCloseButton = document.querySelector(
  "button.about-second-btn > span"
);
const firstAboutButton = document.querySelector("button.about-first-btn");

const secondAboutButton = document.querySelector("button.about-second-btn");

firstAbout.addEventListener("click", () => {
  firstAbout.classList.add("active");
  firstAboutCloseButton.classList.add("active");
});

firstAboutButton.addEventListener("click", () => {
  setTimeout(() => {
    firstAbout.classList.remove("active");
    firstAboutCloseButton.classList.remove("active");
  }, 100);
});

secondAbout.addEventListener("click", () => {
  secondAbout.classList.add("active");
  secondAboutCloseButton.classList.add("active");
});

secondAboutButton.addEventListener("click", () => {
  setTimeout(() => {
    secondAbout.classList.remove("active");
    secondAboutCloseButton.classList.remove("active");
  }, 100);
})