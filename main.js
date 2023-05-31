
// ---------------------------MODAL WINDOW JS---------------------------

document.addEventListener('DOMContentLoaded', function() {
  var modalImages1 = document.querySelectorAll('.modal1'); // Update the class name accordingly for the first modal
  var mainImage1 = document.querySelector('.modal-img.main-image'); // Update the class name accordingly for the first modal

  modalImages1.forEach(function(image) {
    image.addEventListener('click', function() {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage1.src;
      var clickedImageIndex = Array.from(modalImages1).indexOf(this);

      this.src = mainImageSrc;
      mainImage1.src = clickedImageSrc;

      modalImages1[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modalImages2 = document.querySelectorAll('.modal2'); // Update the class name accordingly for the second modal
  var mainImage2 = document.querySelector('.modal-img2.main-image2'); // Update the class name accordingly for the second modal

  modalImages2.forEach(function(image) {
    image.addEventListener('click', function() {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage2.src;
      var clickedImageIndex = Array.from(modalImages2).indexOf(this);

      this.src = mainImageSrc;
      mainImage2.src = clickedImageSrc;

      modalImages2[clickedImageIndex].src = clickedImageSrc;
    });
  });

  var modalImages3 = document.querySelectorAll('.modal3'); // Update the class name accordingly for the second modal
  var mainImage3 = document.querySelector('.modal-img3.main-image3'); // Update the class name accordingly for the second modal

  modalImages3.forEach(function(image) {
    image.addEventListener('click', function() {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage3.src;
      var clickedImageIndex = Array.from(modalImages3).indexOf(this);

      this.src = mainImageSrc;
      mainImage3.src = clickedImageSrc;

      modalImages3[clickedImageIndex].src = clickedImageSrc;
    });
  });


  var modalImages4 = document.querySelectorAll('.modal4'); // Update the class name accordingly for the second modal
  var mainImage4 = document.querySelector('.modal-img4.main-image4'); // Update the class name accordingly for the second modal

  modalImages4.forEach(function(image) {
    image.addEventListener('click', function() {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage4.src;
      var clickedImageIndex = Array.from(modalImages4).indexOf(this);

      this.src = mainImageSrc;
      mainImage4.src = clickedImageSrc;

      modalImages4[clickedImageIndex].src = clickedImageSrc;
    });
  });
});










































// ---------------------------NAV BAR---------------------------

const navbarBrand = document.getElementById('navbar-brand');

navbarBrand.addEventListener('mouseenter', () => {
  navbarBrand.classList.remove('animate__pulse');
  void navbarBrand.offsetWidth; // Reset the animation by triggering a reflow
  navbarBrand.classList.add('animate__pulse');
});
