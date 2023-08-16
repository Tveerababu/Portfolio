document.getElementById("sendButton").addEventListener("click", function() {
  var userInput = document.getElementById("userInput").value;
  var userName = document.getElementById("userName").value;
  var userProject = document.getElementById("UserProject").value;
  var email = "babuv9985@gmail.com";
  var subject = "User Input";
  var body = userName + "User input: " + userInput + userProject;
  var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
  window.location.href = mailtoLink;
});

/*========== NAV BAR ============*/
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    console.log(tab);
    // tab.forEach(tab=>{
    tab.classList.remove("qualification__active");
    // })
    target.classList.add("qualification__active");
  });
});
/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakPoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

let swiper1 = new Swiper(".testimonial__container", {
  loop: true,
  grabCusrsor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});
document.getElementById("downloadButton").addEventListener("click", function() {
  // Replace the URL with the actual URL of your PDF file
  var pdfUrl = "components/pdf/ResumeVeera.pdf";
  
  // Create a link element
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.target = "_blank"; // Open in a new tab
  link.download = "ResumeVeera.pdf"; // Set the download filename
  
  // Trigger a click event on the link
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
document.addEventListener('DOMContentLoaded', function(){
  const whatsappBtn = document.getElementById("whatsappBtn");

  whatsappBtn.addEventListener('click', function(){
    const whatsappUrl = 'https://wa.me/9985032350';
    window.open(whatsappUrl, '_blank');
  })
})


/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
