const images = document.querySelectorAll(".image img");
const closeButton = document.querySelector(".close");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const gallery = document.querySelector(".gallery");
const galleryImage = document.querySelector(".gallery-body img");
const dotImage = document.querySelectorAll('.dot')

console.log(images);
var currentIndex = 0;
const showGallery = () => {
//   if (currentIndex == 0) leftArrow.classList.add("hide");
//   else leftArrow.classList.remove("hide"); 

//   if (currentIndex == images.length-1) rightArrow.classList.add("hide");
//   else rightArrow.classList.remove("hide"); 
dotImage.forEach((dot, index) =>{
    if(currentIndex==index){
        dot.classList.add('red')
    }
    else dot.classList.remove('red')

})
  galleryImage.src = images[currentIndex].src;
  gallery.classList.add("show");
};

images.forEach((image, index) =>
  image.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  })
);
dotImage.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  })
);

closeButton.addEventListener("click", () => {
  gallery.classList.remove("show");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
  else{
    currentIndex=images.length-1;
    showGallery();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
  else{
    currentIndex=0;
    showGallery();
  }
});
