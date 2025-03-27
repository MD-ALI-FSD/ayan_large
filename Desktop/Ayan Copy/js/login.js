function validateLogin() {
  // Get input values
  let loginId = document.getElementById("loginId").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("error-msg");

  // Hardcoded credentials
  if (loginId === "xyz" && password === "123") {
    const loginContainer = document.querySelector(".login-container");
    const loader = document.querySelector(".loaderSection");
    loginContainer.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(() => {
      console.log("Waited for 5 seconds!");
      window.location.href = "index.html"; // Redirect to index.html
    }, 5000);

    return false; // Prevent form from submitting
  } else {
    errorMsg.textContent = "Invalid Login ID or Password!";
    errorMsg.style.color = "red";
    return false; // Prevent form from submitting
  }
}
