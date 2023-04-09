// Select the elements
const navbarForms = document.querySelectorAll("#navbarForm");

// Handle navbar form search by submit event
navbarForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Handle submit event");
  });
});
