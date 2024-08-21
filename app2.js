const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_cm5fy6n';

   emailjs.sendForm("service_f84oaqx","template_7kqvc8b", this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent to admin, and will review and revert!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
    