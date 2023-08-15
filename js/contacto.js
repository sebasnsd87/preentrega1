
// Inicializar emailjs 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5d3862p';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviando Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});