// ========== MODAL ==========

// project 1
const project1Modal = document.querySelector(".projects-section__project1-modal");
const project1Overlay = document.querySelector(".projects-section__project1-overlay");
const openProject1ModalBtn = document.querySelector(".projects-section__project1-cta-btn");
const closeProject1ModalBtn = document.querySelector(".projects-section__close-project1-modal-btn");
const project1Img = document.querySelector(".projects-section__project1-desktop-img");
// project 2
const project2Modal = document.querySelector(".projects-section__project2-modal");
const project2Overlay = document.querySelector(".projects-section__project2-overlay");
const openProject2ModalBtn = document.querySelector(".projects-section__project2-cta-btn");
const closeProject2ModalBtn = document.querySelector(".projects-section__close-project2-modal-btn");
const project2Img = document.querySelector(".projects-section__project2-desktop-img");

// open project 1 modal
const openModal = () => {
  project1Modal.style.visibility = "visible";
  project1Overlay.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}

// open project 2 modal
const openProject2Modal = () => {
  project2Modal.style.visibility = "visible";
  project2Overlay.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}

// close project 1 modal
const closeModal = () => {
  project1Modal.style.visibility = "hidden";
  project1Overlay.style.visibility = "hidden";
  document.body.style.overflow = "auto";
};

// close project 2 modal
const closeProject2Modal = () => {
  project2Modal.style.visibility = "hidden";
  project2Overlay.style.visibility = "hidden";
  document.body.style.overflow = "auto";
};

// project 1 event listeners
openProject1ModalBtn.addEventListener("click", openModal);
project1Img.addEventListener("click", openModal);
closeProject1ModalBtn.addEventListener("click", closeModal);
project1Overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && project1Modal.style.visibility === "visible") {
    closeModal();
  }
});

// project 2 event listeners
openProject2ModalBtn.addEventListener("click", openProject2Modal);
project2Img.addEventListener("click", openProject2Modal);
closeProject2ModalBtn.addEventListener("click", closeProject2Modal);
project2Overlay.addEventListener("click", closeProject2Modal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && project2Modal.style.visibility === "visible") {
    closeProject2Modal();
  }
});

// ========== CAROUSEL ==========

// project 1
let carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');

// project 2
let project2CarouselSlide = document.querySelector('.projects-section__project2-carousel-slide');
let project2CarouselImages = document.querySelectorAll('.projects-section__project2-carousel-slide img');

let counter = 0;
let carousel2Counter = 0;
let size;
let carousel2Size;
let resizeTimeout;

const updateSize = () => {
  size = carouselImages[0].clientWidth;
  carousel2Size = project2CarouselImages[0].clientWidth;
}
updateSize(); // initial call

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateSize, 100);
});

// project 1 next btn
document.getElementById('nextBtn').addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// project 2 next btn
document.getElementById('project2-nextBtn').addEventListener('click', () => {
  if (carousel2Counter >= project2CarouselImages.length - 1) return;
  project2CarouselSlide.style.transition = "transform 0.4s ease-in-out";
  carousel2Counter++;
  project2CarouselSlide.style.transform = 'translateX(' + (-carousel2Size * carousel2Counter) + 'px)';
});

// project 1 prev btn
document.getElementById('prevBtn').addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// project 2 prev btn
document.getElementById('project2-prevBtn').addEventListener('click', () => {
  if (carousel2Counter <= 0) return;
  project2CarouselSlide.style.transition = "transform 0.4s ease-in-out";
  carousel2Counter--;
  project2CarouselSlide.style.transform = 'translateX(' + (-carousel2Size * carousel2Counter) + 'px)';
});

// ========== MOBILE NAV ==========

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

// ========== CONTACT FORM SUBMIT ==========

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
