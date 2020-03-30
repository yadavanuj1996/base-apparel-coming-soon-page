let idValiedEmailAddress=(email)=>{
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

document.addEventListener("DOMContentLoaded", () => {
  
document.getElementById("submit-btn").addEventListener("click", function(event){
  
  if(document.getElementById("email").value === "" || !idValiedEmailAddress(document.getElementById("email").value)){
    document.getElementsByClassName("invalid-notification")[0].classList.add("show-error-text");
     document.getElementById("error-image").classList.add("show-error-image");
    document.getElementById("email").classList.add("add-invalid-border");
  }
  else if(idValiedEmailAddress(document.getElementById("email").value)){
    document.getElementById("submit-btn").classList.add("submit-btn-active-state");
         document.getElementsByClassName("invalid-notification")[0].classList.remove("show-error-text");
     document.getElementById("error-image").classList.remove("show-error-image");
    document.getElementById("email").classList.remove("add-invalid-border");  
    
    // call your API here if you want to send or save the email address

     window.location.href=window.location.href; // as here we do not have to call any API i am just refreshing the page
   }
});


});
