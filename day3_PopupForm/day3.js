const buttonOpen = document.querySelector(".button-openModal");
const closeIcon = document.querySelector(".modal-header i");
const closeButton = document.querySelector(".modal-close");
const modal = document.querySelector(".modalPopup");

const togglePopup = (e) => {
  modal.classList.toggle("hide");
};

buttonOpen.addEventListener("click", togglePopup);
closeIcon.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) togglePopup(e);
});
