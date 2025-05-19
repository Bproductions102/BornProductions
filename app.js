document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");
  
    let currentIndex = 0;
  
    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      const slideWidth = slides[0].clientWidth;
      slider.style.left = `-${slideWidth * index}px`;
      currentIndex = index;
    }
  
    prev.addEventListener("click", () => goToSlide(currentIndex - 1));
    next.addEventListener("click", () => goToSlide(currentIndex + 1));
    setInterval(() => goToSlide(currentIndex + 1), 4000);
    
    // nested menu
    const nestedMenu = document.querySelector(".nested-menu");
    const menuTriggerEl = document.querySelector(".menu-trigger-el");
    
    menuTriggerEl.addEventListener("mouseover", function() {
       nestedMenu.style.display = "block";
    });
    
    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";
    });

    // read more-less
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");
    
    function showHideText() {
        const siblingText = this.previousElementSibling;

        if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Read less";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Read more";
        }
    }

    for (let i = 0; i < readMoreLessBtns.length; i++) {
        const siblingText = readMoreLessBtns[i].previousElementSibling;
        siblingText.style.display = "none";  
        readMoreLessBtns[i].textContent = "Read more";  


        readMoreLessBtns[i].addEventListener("click", showHideText);
    }

    
});
 