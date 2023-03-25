const tombol_daf = document.getElementById("tombol_login");
tombol_daf.onclick = masuk_login;

function masuk_login() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    login();
  });
}

const checkbox = document.getElementById("showpass");
const passwordField = document.getElementById("login_password");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

function login() {
  const username = document.getElementById("login_username").value;
  const password = document.getElementById("login_password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    sessionStorage.setItem("current_user", user.username);
    alert("Login berhasil!");
    window.location.href = "gacha.html";
    return true;
  }

  alert("Username atau password salah!");
  return false;
}
