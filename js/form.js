document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   console.log(userEmail);

  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  //   console.log(userPassword);

  if (
    userEmail === "sujonsarder92@gmail.com" &&
    userPassword === "sujonsarder"
  ) {
    window.location.href = "bank.html";
  } else {
    console.log("invalid email and password");
  }
});
