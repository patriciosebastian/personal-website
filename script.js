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
        status.innerHTML = "Success! I'll be in touch as soon as possible.";
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
            status.innerHTML = "Oops! There was a problem sending your message. Please try again.";
          }
        });
      }
    })
    .catch((error) => {
      status.classList.add('message-error');
      status.innerHTML = "Oops! There was a problem sending your message. Please try again.";
      console.log("Error:", error);
    });
}
form.addEventListener("submit", handleSubmit);
