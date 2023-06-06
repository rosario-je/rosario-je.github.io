
// ---------------------------Blur effect JS---------------------------


























// ---------------------------MODAL WINDOW JS---------------------------

// ---------------------------MODAL WINDOW #1---------------------------
  
document.addEventListener("DOMContentLoaded", function () {
  var modalImages1 = document.querySelectorAll(".modal1");
  var mainImage1 = document.querySelector(".modal-img.main-image");
  var descriptionContainer = document.querySelector(".modal-body .row:last-child .col");

  modalImages1.forEach(function (image) {
    image.addEventListener("click", function () {
      var clickedImageSrc = this.src;
      var mainImageSrc = mainImage1.src;
      var clickedImageIndex = Array.from(modalImages1).indexOf(this);

      this.src = mainImageSrc;
      mainImage1.src = clickedImageSrc;
      modalImages1[clickedImageIndex].src = clickedImageSrc;

      // Update the description text based on the clicked image
      var descriptions = [
        "Main Project description goes here",
        "Second image description",
        "Third image description",
        "Fourth image description",
        "Fifth image description",
        "6th image description",
      ];

      descriptionContainer.innerHTML = descriptions[clickedImageIndex];
    });
  });

  var modal1 = document.getElementById("project1-modal");
  modal1.addEventListener("hidden.bs.modal", function () {
    mainImage1.src = "/images/project 1/project 1.jpg";
    descriptionContainer.innerHTML = "Main Project description goes here";
  });







  // ---------------------------MODAL WINDOW #2---------------------------

    var modalImages2 = document.querySelectorAll(".modal2");
    var mainImage2 = document.querySelector(".modal-img2.main-image2");
    var descriptionContainer2 = document.querySelector("#project2-modal .modal-body .row:last-child .col");
  
    modalImages2.forEach(function (image) {
      image.addEventListener("click", function () {
        var clickedImageSrc = this.src;
        var mainImageSrc = mainImage2.src;
        var clickedImageIndex = Array.from(modalImages2).indexOf(this);
  
        this.src = mainImageSrc;
        mainImage2.src = clickedImageSrc;
        modalImages2[clickedImageIndex].src = clickedImageSrc;
  
        // Update the description text based on the clicked image
        var descriptions = [
        "Second project main description",
        "Second image description",
        "Third image description",
        "Fourth image description",
        "Fifth image description",
        "6th image description",
        ];
  
        descriptionContainer2.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal2 = document.getElementById("project2-modal");
    modal2.addEventListener("hidden.bs.modal", function () {
      mainImage2.src = "/images/project 2/project 2.jpg";
      descriptionContainer2.innerHTML = "Second project main description";
    });

  

  // ---------------------------MODAL WINDOW #3---------------------------

  var modalImages3 = document.querySelectorAll(".modal3");
    var mainImage3 = document.querySelector(".modal-img3.main-image3");
    var descriptionContainer3 = document.querySelector("#project3-modal .modal-body .row:last-child .col");
  
    modalImages3.forEach(function (image) {
      image.addEventListener("click", function () {
        var clickedImageSrc = this.src;
        var mainImageSrc = mainImage3.src;
        var clickedImageIndex = Array.from(modalImages3).indexOf(this);
  
        this.src = mainImageSrc;
        mainImage3.src = clickedImageSrc;
        modalImages3[clickedImageIndex].src = clickedImageSrc;
  
        // Update the description text based on the clicked image
        var descriptions = [
        "Third project main description",
        "Second image description",
        "Third image description",
        "Fourth image description",
        "Fifth image description",
        "6th image description",
        ];
  
        descriptionContainer3.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal3 = document.getElementById("project3-modal");
    modal3.addEventListener("hidden.bs.modal", function () {
      mainImage3.src = "/images/project 3/project 3.jpg";
      descriptionContainer3.innerHTML = "Third project main description";
    });

  // ---------------------------MODAL WINDOW #4---------------------------

  var modalImages4 = document.querySelectorAll(".modal4");
    var mainImage4 = document.querySelector(".modal-img4.main-image4");
    var descriptionContainer4 = document.querySelector("#project4-modal .modal-body .row:last-child .col");
  
    modalImages4.forEach(function (image) {
      image.addEventListener("click", function () {
        var clickedImageSrc = this.src;
        var mainImageSrc = mainImage4.src;
        var clickedImageIndex = Array.from(modalImages4).indexOf(this);
  
        this.src = mainImageSrc;
        mainImage4.src = clickedImageSrc;
        modalImages4[clickedImageIndex].src = clickedImageSrc;
  
        // Update the description text based on the clicked image
        var descriptions = [
        "Fourth project main description",
        "Second image description",
        "Third image description",
        "Fourth image description",
        "Fifth image description",
        "6th image description",
        ];
  
        descriptionContainer4.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal4 = document.getElementById("project4-modal");
    modal4.addEventListener("hidden.bs.modal", function () {
      mainImage4.src = "/images/project 4/project 4.jpg";
      descriptionContainer4.innerHTML = "Fourth project main description";
    });
  // ---------------------------MODAL WINDOW #5---------------------------

  var modalImages5 = document.querySelectorAll(".modal5");
    var mainImage5 = document.querySelector(".modal-img5.main-image5");
    var descriptionContainer5 = document.querySelector("#project5-modal .modal-body .row:last-child .col");
  
    modalImages5.forEach(function (image) {
      image.addEventListener("click", function () {
        var clickedImageSrc = this.src;
        var mainImageSrc = mainImage5.src;
        var clickedImageIndex = Array.from(modalImages5).indexOf(this);
  
        this.src = mainImageSrc;
        mainImage5.src = clickedImageSrc;
        modalImages5[clickedImageIndex].src = clickedImageSrc;
  
        // Update the description text based on the clicked image
        var descriptions = [
        "5th project main description",
        "Second image description",
        "Third image description",
        "Fourth image description",
        "Fifth image description",
        "6th image description",
        ];
  
        descriptionContainer5.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal5 = document.getElementById("project5-modal");
    modal5.addEventListener("hidden.bs.modal", function () {
      mainImage5.src = "/images/project 5/project 5.jpg";
      descriptionContainer5.innerHTML = "5th project main description";
    });




  // ---------------------------SOTWARE LOGOS JS---------------------------

  console.clear();
const element = document.querySelector(".cursor");
const target = document.querySelector(".target");
const text = document.querySelector(".text");
class Cursor {
  constructor(el, target, text) {
    this.el = el;
    // this.target = target;
    // this.text = text;
    // this.triggerDistance = this.target.getBoundingClientRect().width;
    this.bind();
  }

  bind() {
    document.addEventListener("mousemove", this.move.bind(this), false);
  }

  move(e) {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY
    };
    document.querySelectorAll(".target").forEach((single) => {
      const triggerDistance = single.getBoundingClientRect().width;

      const targetPosition = {
        left:
          single.getBoundingClientRect().left +
          single.getBoundingClientRect().width / 2,
        top:
          single.getBoundingClientRect().top +
          single.getBoundingClientRect().height / 2
      };
      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      };

      const angle = Math.atan2(distance.x, distance.y);
      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      );
      if (hypotenuse < triggerDistance) {
        // Nikhil - look at this code to adjust the round cursor area sizing
        TweenMax.to(this.el, 0.2, {
          left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
          top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
          height: single.clientHeight,
          width: single.clientWidth
        });
        TweenMax.to(single.querySelector(".text"), 0.2, {
          x: -((Math.sin(angle) * hypotenuse) / 2),
          y: -((Math.cos(angle) * hypotenuse) / 2)
        });
      } else {
        TweenMax.to(this.el, 0.2, {
          left: cursorPosition.left,
          top: cursorPosition.top,
          height: "12px",
          width: "12px"
        });

        TweenMax.to(single.querySelector(".text"), 0.2, {
          x: 0,
          y: 0
        });
      }
    });
    //     const targetPosition = {
    //       left:
    //         this.target.getBoundingClientRect().left +
    //         this.target.getBoundingClientRect().width / 2,
    //       top:
    //         this.target.getBoundingClientRect().top +
    //         this.target.getBoundingClientRect().height / 2
    //     };
    //     const distance = {
    //       x: targetPosition.left - cursorPosition.left,
    //       y: targetPosition.top - cursorPosition.top
    //     };
    //     const angle = Math.atan2(distance.x, distance.y);
    //     const hypotenuse = Math.sqrt(
    //       distance.x * distance.x + distance.y * distance.y
    //     );
    //     if (hypotenuse < this.triggerDistance) {
    //       TweenMax.to(this.el, 0.2, {
    //         left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
    //         top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
    //         height: target.clientHeight,
    //         width: target.clientWidth
    //       });
    //       TweenMax.to(document.querySelector(".text"), 0.2, {
    //         x: -((Math.sin(angle) * hypotenuse) / 2),
    //         y: -((Math.cos(angle) * hypotenuse) / 2)
    //       });
    //     } else {
    //       TweenMax.to(this.el, 0.2, {
    //         left: cursorPosition.left,
    //         top: cursorPosition.top,
    //         height: "12px",
    //         width: "12px"
    //       });
    //       TweenMax.to(document.querySelector(".text"), 0.2, {
    //         x: 0,
    //         y: 0
    //       });
    //     }
  }
}
const cursor = new Cursor(element, target);

  











































});
















// ---------------------------NAV BAR---------------------------

const navbarBrand = document.getElementById("navbar-brand");

navbarBrand.addEventListener("mouseenter", () => {
  navbarBrand.classList.remove("animate__pulse");
  void navbarBrand.offsetWidth; // Reset the animation by triggering a reflow
  navbarBrand.classList.add("animate__pulse");
});
