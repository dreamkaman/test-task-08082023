const contactUsForm = document.querySelector('.contact-form');
const submitter = document.querySelector('.contact-form button[type="submit"]');

const checkBox = document.querySelector('.contact-form input[type="checkbox"]');

console.log(checkBox);

contactUsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //Prepared data for sending to the server
  const formData = new FormData(contactUsForm, submitter);
  for (const [key, value] of formData) {
    console.log(`${key} - ${value}`);
  }
  contactUsForm.reset();
});

checkBox.addEventListener('change', (e) => {
  submitter.disabled = !e.currentTarget.checked;
});
