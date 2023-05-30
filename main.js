

document.addEventListener("click", function (e){
    if(e.target.classList.contains("project-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();

    }
})



const navbarBrand = document.getElementById('navbar-brand');

navbarBrand.addEventListener('mouseenter', () => {
  navbarBrand.classList.remove('animate__pulse');
  void navbarBrand.offsetWidth; // Reset the animation by triggering a reflow
  navbarBrand.classList.add('animate__pulse');
});
