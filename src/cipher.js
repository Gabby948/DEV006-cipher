


export default cipher;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const newAlphabet = "";
function cipher(n){
  for (let i = 0; i < alphabet.length; i++){
    const offset = (i + n) % alphabet.length;
    result += alphabet[offset];
  }
}
function encode (message){
  let result = "";
  for (let i = 0; i < message.length; i++){
    const index = alphabet.indexOf(message[i]);
    result += newAlphabet[index];
  }
  return result;
}
function decode (message){
  let result = ""; 
  for (let i = 0; i < message.length; i++){
    const index = newAlphabet.indexOf(message[i]);
    result += alphabet[index];
  }
  return result;
}









