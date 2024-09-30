console.log("hello badr")


function sendMail(){
    // alert('hello')
    let params={
        from_name:document.getElementById("userName").value,
        email_id:document.getElementById("email_id").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_klj723p","template_e0yo2zn",params).then((res) =>{
   alert('You message has been sent successfully' )
    })
}