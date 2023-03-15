
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const portfolioBtn = document.getElementById("portfolio-btn");
const contactBtn = document.getElementById("contact-btn");

const footerHome = document.getElementById("footer-home");
const footerMenu = document.getElementById("footer-menu");
const footerStory = document.getElementById("footer-story");
const footerLocation = document.getElementById("footer-location")

const sectionOne = document.querySelector(".section-one");
const sectionTwo = document.querySelector(".section-two");
const sectionThree = document.querySelector(".section-three");
const sectionFour = document.querySelector(".section-four");

homeBtn.addEventListener('click', function(e){
    e.preventDefault();
        sectionOne.scrollIntoView({
            behavior: "smooth"
        });
    });
aboutBtn.addEventListener('click', function(e){
e.preventDefault();
    sectionTwo.scrollIntoView({
        behavior: "smooth"
    });
});
portfolioBtn.addEventListener('click', function(e){
    e.preventDefault();
    sectionThree.scrollIntoView({
        behavior: "smooth"
    });
    });
contactBtn.addEventListener('click', function(e){
    e.preventDefault();
    sectionFour.scrollIntoView({
        behavior: "smooth"
    });
    });

    footerHome.addEventListener('click', function(e){
        e.preventDefault();
        sectionOne.scrollIntoView({
            behavior: "smooth"
        });
    });
    footerMenu.addEventListener('click', function(e){
        e.preventDefault();
        sectionOne.scrollIntoView({
            behavior: "smooth"
        });
    });
    footerStory.addEventListener('click', function(e){
        e.preventDefault();
        sectionTwo.scrollIntoView({
            behavior: "smooth"
        });
    });
    footerLocation.addEventListener('click', function(e){
        e.preventDefault();
        sectionFour.scrollIntoView({
            behavior: "smooth"
        });
    });

   
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
