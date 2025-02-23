document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("DWOvyty0GTFHkYl6A"); // Replace with your EmailJS Public Key
  
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
  
      emailjs.send("service_mthwdmn", "template_d6qjs1n", formData)
        .then(() => {
          document.getElementById("status").innerText = "Message sent successfully!";
          document.getElementById("contact-form").reset();
        })
        .catch(() => {
          document.getElementById("status").innerText = "Failed to send message. Try again.";
        });
    });
  });
  