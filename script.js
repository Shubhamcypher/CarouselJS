var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.querySelector(".more-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  moreBtn.addEventListener("click", function () {
    toggleDropdown();
  });

  function toggleDropdown() {
    const isDisplayed = dropdownContent.style.display === "block";
    dropdownContent.style.display = isDisplayed ? "none" : "block";

    const marginTop = isDisplayed ? "40px" : "118px";
    dropdownContent.style.marginTop = marginTop;
  }

});