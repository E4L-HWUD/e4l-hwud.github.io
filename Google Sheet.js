const scriptURL = 'https://script.google.com/macros/s/AKfycbzTfMVAoigdKoz5wxTD0iMam79WyqomNABxYF9uLOcmY4CFQdunBYLCKfJcT59Hq0rF/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form has been submitted successfully. We'll reach out to you soon."))
    .catch(error => console.error('Error!', error.message))
})