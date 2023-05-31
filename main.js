// ---------------------------MODAL WINDOW JS---------------------------

// ---------------------------MODAL WINDOW #1---------------------------
document.addEventListener("DOMContentLoaded", function () {
  var modalImages1 = document.querySelectorAll(".modal1"); // Update the class name accordingly for the first modal
  var mainImage1 = document.querySelector(".modal-img.main-image"); // Update the class name accordingly for the first modal

  modalImages1.forEach(function (image) {
    image.addEventListener("click", function () {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage1.src;
      var clickedImageIndex = Array.from(modalImages1).indexOf(this);

      this.src = mainImageSrc;
      mainImage1.src = clickedImageSrc;

      modalImages1[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modal1 = document.getElementById("project1-modal"); // Update the modal ID accordingly for the first modal
  modal1.addEventListener("hidden.bs.modal", function () {
    mainImage1.src = "/images/project 1/project 1.jpg"; // Update with the path to your main image for the first modal
  });

  // ---------------------------MODAL WINDOW #2---------------------------

  var modalImages2 = document.querySelectorAll(".modal2"); // Update the class name accordingly for the second modal
  var mainImage2 = document.querySelector(".modal-img2.main-image2"); // Update the class name accordingly for the second modal

  modalImages2.forEach(function (image) {
    image.addEventListener("click", function () {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage2.src;
      var clickedImageIndex = Array.from(modalImages2).indexOf(this);

      this.src = mainImageSrc;
      mainImage2.src = clickedImageSrc;

      modalImages2[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modal2 = document.getElementById("project2-modal"); // Update the modal ID accordingly for the first modal
  modal2.addEventListener("hidden.bs.modal", function () {
    mainImage2.src = "/images/project 2/project 2.jpg"; // Update with the path to your main image for the first modal
  });

  // ---------------------------MODAL WINDOW #3---------------------------

  var modalImages3 = document.querySelectorAll(".modal3"); // Update the class name accordingly for the second modal
  var mainImage3 = document.querySelector(".modal-img3.main-image3"); // Update the class name accordingly for the second modal

  modalImages3.forEach(function (image) {
    image.addEventListener("click", function () {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage3.src;
      var clickedImageIndex = Array.from(modalImages3).indexOf(this);

      this.src = mainImageSrc;
      mainImage3.src = clickedImageSrc;

      modalImages3[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modal3 = document.getElementById("project3-modal"); // Update the modal ID accordingly for the first modal
  modal3.addEventListener("hidden.bs.modal", function () {
    mainImage3.src = "/images/project 3/project 3.jpg"; // Update with the path to your main image for the first modal
  });

  // ---------------------------MODAL WINDOW #4---------------------------

  var modalImages4 = document.querySelectorAll(".modal4"); // Update the class name accordingly for the second modal
  var mainImage4 = document.querySelector(".modal-img4.main-image4"); // Update the class name accordingly for the second modal

  modalImages4.forEach(function (image) {
    image.addEventListener("click", function () {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage4.src;
      var clickedImageIndex = Array.from(modalImages4).indexOf(this);

      this.src = mainImageSrc;
      mainImage4.src = clickedImageSrc;

      modalImages4[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modal4 = document.getElementById("project4-modal"); // Update the modal ID accordingly for the first modal
  modal4.addEventListener("hidden.bs.modal", function () {
    mainImage4.src = "/images/project 4/project 4.jpg"; // Update with the path to your main image for the first modal
  });
  // ---------------------------MODAL WINDOW #5---------------------------

  var modalImages5 = document.querySelectorAll(".modal5"); // Update the class name accordingly for the second modal
  var mainImage5 = document.querySelector(".modal-img5.main-image5"); // Update the class name accordingly for the second modal

  modalImages5.forEach(function (image) {
    image.addEventListener("click", function () {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage5.src;
      var clickedImageIndex = Array.from(modalImages5).indexOf(this);

      this.src = mainImageSrc;
      mainImage5.src = clickedImageSrc;

      modalImages5[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modal5 = document.getElementById("project5-modal"); // Update the modal ID accordingly for the first modal
  modal5.addEventListener("hidden.bs.modal", function () {
    mainImage5.src = "/images/project 5/project 5.jpg"; // Update with the path to your main image for the first modal
  });
















































});
















// ---------------------------NAV BAR---------------------------

const navbarBrand = document.getElementById("navbar-brand");

navbarBrand.addEventListener("mouseenter", () => {
  navbarBrand.classList.remove("animate__pulse");
  void navbarBrand.offsetWidth; // Reset the animation by triggering a reflow
  navbarBrand.classList.add("animate__pulse");
});
