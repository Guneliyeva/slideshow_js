let index = 1;
let slides = document.getElementsByClassName("mySlides");

function startSlideshow() {
  fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i <30; i++) {
        if (i >= slides.length) {
          let newSlide = document.createElement("div");
          newSlide.className = "mySlides";
          document
            .querySelector(".container")
            .insertBefore(newSlide, document.querySelector(".next"));
          slides = document.getElementsByClassName("mySlides"); 
        }
        slides[
          i
        ].innerHTML = `<img src="${data[i].download_url}" alt="Slide" ">`;
      }
      showSlides(index);
    });
}

startSlideshow();

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides((index += n));
}
