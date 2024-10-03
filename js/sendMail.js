function sendMail() {
    let params = {
      from_name: document.getElementById("userName").value,
      email_id: document.getElementById("email_id").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
  
    // First email sending
    emailjs.send("service_a019pts", "template_vfydvhc", params)
      .then((res) => {
        // If the first email is successful, send the confirmation email
        return emailjs.send("service_a019pts", "template_tkcu938", params);
      })
      .then(() => {
        // Both emails were successful
        alert("Your message has been sent successfully");
      })
      .catch((error) => {
        // Handle errors if either of the emails fail
        console.error("Error sending email:", error);
        alert("There was an issue sending your message. Please try again later.");
      });
  }
  
