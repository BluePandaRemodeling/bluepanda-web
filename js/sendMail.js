function sendMail() {
    let params = {
      name: document.getElementById("userName").value,
      email: document.getElementById("email_id").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };
  
    // First email sending to the user.
    emailjs.send("service_s8dhxmj","template_lappwjh", params)
      .then((res) => {
        // If the first email is successful, send the form email to bluepandaremodeling.
        return emailjs.send("service_s8dhxmj","template_4ihjr2c", params);
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
  
