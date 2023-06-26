document.addEventListener("DOMContentLoaded", function() {
    var registerButton = document.getElementById("register-button");
    registerButton.addEventListener("click", register);
  });
  
  function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var committee = document.getElementById('committee').value;
    
    alert('Registration successful!');
  }
  