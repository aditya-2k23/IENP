function showDialog() {
  var dialogBox = document.getElementById("dialog-box");
  dialogBox.classList.remove("dialog-hidden");
  dialogBox.classList.add("dialog-visible");
}

function hideDialog() {
  var dialogBox = document.getElementById("dialog-box");
  dialogBox.classList.remove("dialog-visible");
  dialogBox.classList.add("dialog-hidden");
}

function login() {
  window.location.href = "login.html";
}
