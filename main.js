
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
        "The Mamaawi Community Centre welcomes locals, tourists, and tenants, offering a diverse range of activities and shops. With an intricately designed transformational mimicry, this concept revitalizes the existing heritage building, drawing inspiration from Canada's Indigenous peoples and paying homage to their rich history. By encouraging visitors to experience the different stages of the circle of life, this concept reflects the core beliefs of the land's first nations. The incorporation of cultural focal points and the renowned biography of the original Alton Mill aims to unite these two historic values in this building.",

        "This captivating aerial perspective showcases the impressive architecture and grandeur of the Mamaawi Community Center. The center stands as a testament to its purpose, offering a welcoming and inclusive space for various communities to gather and thrive. Its design harmoniously blends functionality and aesthetics, exuding a sense of sophistication and elegance from above. The aerial view provides a unique vantage point to appreciate the center's thoughtful layout, capturing its expansive scale and meticulous attention to detail. As the eye surveys the surroundings, it becomes evident that the Mamaawi Community Center is a remarkable landmark that enriches the urban landscape, symbolizing unity, cultural heritage, and progressive ideals.",

        "The main entrance of the Mamaawi Community Center exudes an aura of grandeur and welcomes visitors with its impressive architectural design. The entrance serves as a gateway to an inclusive and vibrant space that caters to the diverse needs of the community. Its carefully crafted aesthetics and attention to detail make a lasting first impression, capturing the essence of the center's purpose and significance. As one approaches the main entrance, they are greeted by a captivating blend of contemporary and cultural elements, symbolizing the harmonious coexistence of tradition and progress. This focal point not only represents the physical gateway to the center but also embodies the values of inclusivity, community engagement, and cultural heritage that lie within its walls.",

        "The outdoor waiting area of the Mamaawi Community Center is a serene and inviting space, nestled in nature. It provides a peaceful retreat for visitors, with comfortable seating and a harmonious blend of aesthetics. This tranquil area reflects the center's commitment to holistic experiences, offering a moment of relaxation and connection to nature before exploring the center's diverse offerings.",

        "The dock area of the Mamaawi Community Center is a picturesque waterfront space that seamlessly blends functionality and aesthetics. This carefully designed area serves as a gateway to various water-based activities and experiences. With its well-appointed docks and charming waterfront views, it offers visitors a serene and idyllic setting to enjoy the surrounding natural beauty. Whether for leisurely strolls, boating excursions, or simply taking in the tranquil ambiance, the dock area provides a delightful escape that embraces the center's commitment to outdoor engagement and recreation. Imbued with a sense of tranquility and adventure, this waterfront oasis embodies the essence of the Mamaawi Community Center's spirit, where visitors can immerse themselves in the serenity of the water while forging meaningful connections with nature and fellow community members.",
        
        "The dock/back area of the Mamaawi Community Center is a charming and versatile space that complements the waterfront ambiance. With its well-crafted docks and picturesque views, it offers visitors a serene setting for waterfront activities and relaxation. This area, similar to the previous picture, embodies the center's commitment to outdoor engagement and recreation, providing a delightful escape where visitors can connect with nature and enjoy the tranquil waters.",
      ];

      descriptionContainer.innerHTML = descriptions[clickedImageIndex];
    });
  });

  var modal1 = document.getElementById("project1-modal");
  modal1.addEventListener("hidden.bs.modal", function () {
    mainImage1.src = "/images/project 1/project 1.jpg";
    descriptionContainer.innerHTML = "The Mamaawi Community Centre welcomes locals, tourists, and tenants, offering a diverse range of activities and shops. With an intricately designed transformational mimicry, this concept revitalizes the existing heritage building, drawing inspiration from Canada's Indigenous peoples and paying homage to their rich history. By encouraging visitors to experience the different stages of the circle of life, this concept reflects the core beliefs of the land's first nations. The incorporation of cultural focal points and the renowned biography of the original Alton Mill aims to unite these two historic values in this building.";
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
        "This project served as a concise guide and comprehensive exploration of contemporary residential home construction and organization practices. The underlying objective of this endeavor was to engage in the design and development of an optimal home layout tailored to meet the needs of a modern-day family.",
        "The front view of this remarkable residential home showcases architectural elegance and modern design, with meticulous attention to detail and stunning aesthetics.",
        "The backyard view of this exceptional residential home offers a captivating blend of beauty and functionality. With meticulous landscaping and thoughtful design, the outdoor space provides a serene sanctuary that combines relaxation and enjoyment.",
        "Step into the interior living room of this remarkable residential home and be greeted by a captivating blend of style and comfort. Meticulously designed with meticulous attention to detail, this living room exudes a welcoming atmosphere that seamlessly combines aesthetics and functionality.",
        "Enter into this captivating interior room of the residential home and experience a harmonious fusion of style and functionality. Every detail has been thoughtfully curated, creating an inviting space that effortlessly balances aesthetics and practicality.",
        "Witness the mesmerizing outdoor night view of this exceptional residential home as it illuminates the surrounding landscape. With strategically placed lighting, the architectural brilliance of the home comes to life, creating a captivating ambiance that seamlessly blends elegance and charm. It's a breathtaking scene that highlights the allure of refined living under the enchanting night sky.",
        ];
  
        descriptionContainer2.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal2 = document.getElementById("project2-modal");
    modal2.addEventListener("hidden.bs.modal", function () {
      mainImage2.src = "/images/project 2/project 2.jpg";
      descriptionContainer2.innerHTML = "This project served as a concise guide and comprehensive exploration of contemporary residential home construction and organization practices. The underlying objective of this endeavor was to engage in the design and development of an optimal home layout tailored to meet the needs of a modern-day family.",
      "The front view of this remarkable residential home showcases architectural elegance and modern design, with meticulous attention to detail and stunning aesthetics.";
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
        "Explore the visionary design of this mixed residential building, crafted as an impressive architectural college project. Seamlessly integrating commercial spaces on the first floor with residential units above, this project embodies a harmonious fusion of functionality and aesthetics. Utilizing advanced tools like Revit, Lumion, and Photoshop, meticulous attention to detail is evident throughout. The fourth-floor outdoor area provides an inviting retreat, offering residents a captivating view of the dynamic cityscape. It's a tranquil oasis that perfectly balances the vibrant urban environment, showcasing the ingenuity and creativity of this remarkable architectural endeavor.",
        "The second image showcases the front of the building, featuring distinct entrances for the commercial and residential spaces. This well-designed facade captures the seamless integration of both aspects, offering a visually appealing and functional composition.",
        "This image showcases the captivating main lobby of the building, exuding elegance and sophistication. It leaves a lasting impression with its impeccable design and meticulous attention to detail.",
        "Unvealing the remarkable facade of the building, featuring multiple louvre systems strategically integrated for shadow casting purposes. This thoughtful design element not only adds visual intrigue but also serves to regulate sunlight and create a comfortable indoor environment. Additionally, the image showcases the enticing outdoor area on the fourth floor, providing a serene and inviting space for residents to relax and enjoy the surrounding views.",
        "The next image highlights the building's facade, featuring multiple louvre systems for shadow casting. These carefully placed louvres add visual interest while providing effective sun control, ensuring a comfortable indoor environment.",
        "The final image showcases the captivating outdoor area on the fourth floor. This serene and inviting space offers a respite from the bustling city below, allowing residents to unwind and enjoy breathtaking views. With its thoughtful design and meticulous attention to detail, this outdoor oasis provides a tranquil environment for relaxation and leisure.",
        ];
  
        descriptionContainer3.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal3 = document.getElementById("project3-modal");
    modal3.addEventListener("hidden.bs.modal", function () {
      mainImage3.src = "/images/project 3/project 3.jpg";
      descriptionContainer3.innerHTML = "Explore the visionary design of this mixed residential building, crafted as an impressive architectural college project. Seamlessly integrating commercial spaces on the first floor with residential units above, this project embodies a harmonious fusion of functionality and aesthetics. Utilizing advanced tools like Revit, Lumion, and Photoshop, meticulous attention to detail is evident throughout. The fourth-floor outdoor area provides an inviting retreat, offering residents a captivating view of the dynamic cityscape. It's a tranquil oasis that perfectly balances the vibrant urban environment, showcasing the ingenuity and creativity of this remarkable architectural endeavor.";
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
        "Experience the transformation of the lobby at 1 Hotel in Toronto through a remarkable renovation project that embraces the essence of eco-friendly aesthetics. With a strong focus on creating a green and sustainable environment, this renovation breathes new life into the space while honoring the hotel's commitment to sustainability. The revitalized lobby seamlessly integrates natural elements, energy-efficient technologies, and recycled materials to create an inviting and environmentally conscious atmosphere. From living green walls to eco-friendly furnishings, every detail has been thoughtfully curated to showcase the harmonious blend of design and sustainability. Step into this renewed space and immerse yourself in the beauty of a green environment-friendly aesthetic that redefines luxury in a responsible and sustainable manner.",
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
      descriptionContainer4.innerHTML = "Experience the transformation of the lobby at 1 Hotel in Toronto through a remarkable renovation project that embraces the essence of eco-friendly aesthetics. With a strong focus on creating a green and sustainable environment, this renovation breathes new life into the space while honoring the hotel's commitment to sustainability. The revitalized lobby seamlessly integrates natural elements, energy-efficient technologies, and recycled materials to create an inviting and environmentally conscious atmosphere. From living green walls to eco-friendly furnishings, every detail has been thoughtfully curated to showcase the harmonious blend of design and sustainability. Step into this renewed space and immerse yourself in the beauty of a green environment-friendly aesthetic that redefines luxury in a responsible and sustainable manner.";
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
        "Discover the visionary design of a modern parking lot situated in downtown Santo Domingo, Dominican Republic. This innovative project incorporates large solar panels that serve a dual purpose. Not only do these panels generate clean energy, but they also act as efficient shadow casters, providing shade for parked vehicles. This sustainable and functional approach demonstrates a commitment to renewable energy integration while prioritizing the comfort of parking lot users. With its sleek aesthetics and forward-thinking design, this modern parking lot showcases the possibilities of urban sustainability in Santo Domingo.",
        "The second image highlights a dedicated parking space for individuals with disabilities, demonstrating a commitment to accessibility and inclusivity. This specially designated area ensures that people with mobility challenges have convenient access to the parking facility. Thoughtfully designed with proper signage and accommodations, this parking space reflects a commitment to creating an inclusive environment for all visitors.",
        "Experience another angle of the parking lot's interior, revealing its spacious and well-organized layout. With clear markings and designated parking spaces, this image showcases efficient traffic flow and easy maneuverability. The well-lit environment ensures enhanced visibility and security, creating a user-friendly and safe parking experience.",
        "Presenting another captivating angle of the parking lot's interior, offering a fresh perspective on its well-designed layout. This image showcases the seamless organization and functionality of the space, with clearly marked parking spaces and efficient traffic flow. The well-lit environment ensures optimum visibility and safety, providing a pleasant and hassle-free parking experience.",
        "Experience another perspective of the parking lot's interior, capturing the enchanting play of sunlight during the afternoon. The gentle glare of the sun adds a natural radiance to the well-designed space. Despite the sunlight, the layout ensures minimal disruption, maintaining a comfortable environment for vehicles and visitors alike.",
        "The entrance of the parking lot showcases a state-of-the-art parking spot ticket printing system, proudly programmed and manufactured by Nodrix. This modern and efficient technology ensures seamless and accurate ticket issuance for parking lot users. With its sleek design and user-friendly interface, the system provides a hassle-free experience, enhancing the overall efficiency and convenience of the parking facility. The Nodrix parking spot ticket printing system exemplifies the commitment to innovative solutions in modern parking management.",
        ];
  
        descriptionContainer5.innerHTML = descriptions[clickedImageIndex];
      });
    });
  
    var modal5 = document.getElementById("project5-modal");
    modal5.addEventListener("hidden.bs.modal", function () {
      mainImage5.src = "/images/project 5/project 5.jpg";
      descriptionContainer5.innerHTML = "Discover the visionary design of a modern parking lot situated in downtown Santo Domingo, Dominican Republic. This innovative project incorporates large solar panels that serve a dual purpose. Not only do these panels generate clean energy, but they also act as efficient shadow casters, providing shade for parked vehicles. This sustainable and functional approach demonstrates a commitment to renewable energy integration while prioritizing the comfort of parking lot users. With its sleek aesthetics and forward-thinking design, this modern parking lot showcases the possibilities of urban sustainability in Santo Domingo.";
    });
  });




  // ---------------------------SOTWARE LOGOS JS---------------------------


















// ---------------------------NAV BAR---------------------------

