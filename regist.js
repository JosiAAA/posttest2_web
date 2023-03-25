const tombol_daf = document.getElementById("tombol_regis");
tombol_daf.onclick = berhasil_regis;
const tombolBatal = document.getElementById("kotak_batal");
const form = document.getElementById("register-form");
const kotak_masuk = document.getElementById("kotak_masuk");

function berhasil_regis(){
    form.addEventListener("submit", function(event) {
        event.preventDefault();
       
        form.style.display = 'none'; 
        kotak_masuk.style.display = "block";  
    });
}

tombolBatal.addEventListener("click", function() {
    kotak_masuk.style.display = "none";
    form.style.display = "block";
});
const tombol_confirm = document.getElementById("confirm_button");
tombol_confirm.addEventListener("click", function() {
    const select_box = document.getElementById("select_box");
    const selected_value = select_box.value;
    if (selected_value === "ya") {
    
    register();
    window.location.href = "register.html";

    }else{
        alert("Pendaftaran Akun di Batalkan")
    }
  
     
});

const checkbox = document.getElementById("showpass");
const passwordField = document.getElementById("register_password");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

function register() {
  // Mendapatkan nilai input dari form register
  const username = document.getElementById("register_username").value;
  const password = document.getElementById("register_password").value;

  // Membuat array untuk menyimpan informasi akun
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Mengecek apakah username sudah terdaftar
  const isDuplicate = users.some((user) => user.username === username);

  if (isDuplicate) {
    alert("Username sudah terdaftar!");
    return false;
  }

  users.push({ username, password });

  
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registrasi berhasil!");
  return true;
}