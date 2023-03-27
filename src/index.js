import cipher from './cipher.js';





document.getElementById("message").addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
});

document.getElementById("cipher").addEventListener("click", function () {
  

  const text = document.getElementById("message").value;
  const displacement = document.getElementById("displacement").value;
  cipher(text, displacement);
});
document.getElementById("decipher").addEventListener("click", function () {
  const text = document.getElementById("message").value;
  const displacement = document.getElementById("displacement").value;
  cipher(text, displacement);
});
