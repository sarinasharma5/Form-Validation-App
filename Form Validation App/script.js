function validateForm() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (username === "") {
    errorMsg.textContent = "⚠ Username is required.";
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMsg.textContent = "⚠ Enter a valid email address.";
    return false;
  }

  if (password.length < 6) {
    errorMsg.textContent = "⚠ Password must be at least 6 characters.";
    return false;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "⚠ Passwords do not match.";
    return false;
  }

  successMsg.textContent = "✅ Registration successful!";
  return false; // For demo, prevents form submission
}