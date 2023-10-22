// Modal
const project1Modal = document.querySelector(".projects-section__project1-modal");
const project1Overlay = document.querySelector(".projects-section__project1-overlay");
const openProject1ModalBtn = document.querySelector(".projects-section__project1-cta-btn");
const closeProject1ModalBtn = document.querySelector(".projects-section__close-project1-modal-btn");
const project1Img = document.querySelector(".projects-section__project1-desktop-img");

const openModal = () => {
  project1Modal.style.visibility = "visible";
  project1Overlay.style.visibility = "visible";
  // document.body.style.overflow = "hidden";
}

const closeModal = () => {
  project1Modal.style.visibility = "hidden";
  project1Overlay.style.visibility = "hidden";
  // document.body.style.overflow = "auto";
};

openProject1ModalBtn.addEventListener("click", openModal);
project1Img.addEventListener("click", openModal);
closeProject1ModalBtn.addEventListener("click", closeModal);
project1Overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && project1Modal.style.visibility === "visible") {
    closeModal();
  }
});

// Carousel
let carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
let size;
let resizeTimeout;

const updateSize = () => {
  size = carouselImages[0].clientWidth;
}
updateSize(); // initial call

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateSize, 100);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Mobile nav styles on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".nav-container__nav-ul");
  
  // Add a class to the Nav once a user scrolls down,
  // remove the class when user scrolls back up
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Contact Form Submit
const form = document.querySelector(".contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector(".form-status");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        status.classList.add('message-success');
        status.innerHTML = "SUCCESS! I'LL BE IN TOUCH AS SOON AS POSSIBLE.";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.classList.add('message-error');
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.classList.add('message-error');
            status.innerHTML = "OOPS! THERE WAS A PROBLEM SENDING YOUR MESSAGE. PLEASE TRY AGAIN.";
          }
        });
      }
    })
    .catch((error) => {
      status.classList.add('message-error');
      status.innerHTML = "OOPS! THERE WAS A PROBLEM SENDING YOUR MESSAGE. PLEASE TRY AGAIN.";
      console.log("Error:", error);
    });
}
form.addEventListener("submit", handleSubmit);
