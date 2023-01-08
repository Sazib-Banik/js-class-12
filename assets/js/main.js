const submit_btn = document.getElementById("submit_btn");
//console.log(submit_btn);

submit_btn.addEventListener("click", function(){
    const getEmailValue = document.getElementById("email").value;
    const getSubjectValue = document.getElementById("subject").value;
    const getMessageValue = document.getElementById("message").value;

    const message_text = document.getElementById("message_text");
    // console.log(getEmailValue, getSubjectValue, getMessageValue);

    var templateParams = {
      getEmailValue: getEmailValue,
      getSubjectValue: getSubjectValue,
      getMessageValue: getMessageValue,
    };

    if(getEmailValue && getSubjectValue && getMessageValue){
        message_text.innerText = "Successfully Sent Your Message!";
        emailjs.send(
          "service_One",
          "template_leaq07p",
          templateParams,
          "xWge5c0RcxQsvGhf4"
        );
        getEmailValue.innerText = "";
    }else{
        message_text.innerText = "Please! try again";
    }
})