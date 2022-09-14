const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function submit_form(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username.length <= 0) {
      alert("Username is required");
      return;
    }
  
    if (password.length <= 0) {
      alert("Password is required");
      return;
    }
  
    alert("Login successfull");
    document.getElementById("form").reset();
}

function create_account(){
    var n = document.getElementById("username").value;
    var e = document.getElementById("email").value;
    var p = document.getElementById('password').value;
    var cp = document.getElementById('cpassword').value;

    var letters = /^[A-Za-z]+$/
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(username==''||email==''||password==''||cpassword==''){
        alert("Enter each details correctly");
    }
    else if(!letters.test(username)){
        alert("Name is incorrect, must contain alphabets only");
    }
    else if(!email_val.test(email)){
        alert("Invalid email format, please enter a valid email id");
    }
    else if(password!=cpassword){
        alert("Password not matching");
    }
    else if(password.length > 12){
        alert("password maximum length is 12");
    }
    else if(password.length < 6){
        alert("password minimum length is 6");
    }
    else{
        alert("Your account has been created successfully");

    }

}