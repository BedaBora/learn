"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", showModal);
}

btn.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

// we handling styling with class names because classes help us combine multiple styles under one common class

//handle events when Esc key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    hideModal();
});
