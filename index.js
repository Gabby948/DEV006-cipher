import cipher from './cipher.js';



document.getElementById("message").addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
});

document.getElementById("encode").addEventListener("click", function () {
  const encodeMessage = document.getElementById("message").value;
  const offsetNumber = document.getElementById("offsetNumber").value;
  document.getElementById ("message2").value = cipher.encode( offsetNumber, encodeMessage);
});


document.getElementById("decode").addEventListener("click", function () {
  const decodeMessage = document.getElementById("message").value;
  const offsetNumberD = document.getElementById("offsetNumber").value;
  document.getElementById ("message2").value = cipher.decode(offsetNumberD,decodeMessage);
});

