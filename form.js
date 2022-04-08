function validate() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cnfpassword = document.getElementById("cnfpassword").value;

  checkusername(username);
  checkemail(email);
  checkpassword(password);
  checkcnfpassword(password, cnfpassword);
}

function checkusername(username) {
  if (username.length > 7) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("usernameError").innerText = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("usernameError").innerHTML =
      "Username length must be greater than 7";
  }
}

function checkemail(email) {
  if (email.includes("@gmail.com") || email.includes("@yahoo.com")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("emailError").innerText = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("emailError").innerHTML =
      "Email must include @gmail.com or @yahoo.com";
  }
}

function checkpassword(password) {
  if (
    password.length > 8 &&
    (password.includes("@") ||
      password.includes("#") ||
      password.includes("$") ||
      password.includes("&"))
  ) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("passwordError").innerText = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("passwordError").innerText =
      "Password length must be greater than 8 and includes special character @,#,$,& ";
  }
}

function checkcnfpassword(password, cnfpassword) {
  if (password === cnfpassword && password != "") {
    document.getElementById("cnfpassword").classList.add("success");
    document
      .getElementById("cnfpassword")
      .classList.replace("error", "success");
    document.getElementById("cnfpasswordError").innerText = "";
  } else {
    document.getElementById("cnfpassword").classList.add("error");
    document.getElementById("cnfpasswordError").innerText =
      "Password doesn't match";
  }
}
