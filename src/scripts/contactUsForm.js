const contactUsForm = document.querySelector('.contact-form');
const submitter = document.querySelector('.contact-form button[type="submit"]');

console.dir(submitter);

contactUsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactUsForm, submitter);
  for (const [key, value] of formData) {
    console.log(`${key} - ${value}`);
  }
  contactUsForm.reset();
});
