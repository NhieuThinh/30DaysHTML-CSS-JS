const SeachButton = document.querySelector(".search-button");
SeachButton.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  console.log(this.previousElementSibling.children)
  this.previousElementSibling.children[0].focus()
});
