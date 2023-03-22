//const cipher = {
  // ...
//};

export default cipher;

window.addEventListener("load",start, true);

function start (){
  document.getElementById("message").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
},true);

}
console.log('start');


document.getElementById("cipher").addEventListener("click", function(){
  let text = document.getElementById("message").value;
  let displacement = document.getElementById("displacement").value;
  document.getElementById ("message2").value = cipher2 (text,displacement);
}, true);
document.getElementById("decipher").addEventListener ("click", function(){
  let text = document.getElementById("message").value;
  let displacement = document.getElementById ("displacement").value;
  document.getElementById ("message2").value = decipher (text,displacement);
},true);


function cipher (text, displacement){
let result = "";
const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


displacement = (displacement % 26 + 26) % 26;

if (text){
   for (let i = 0; i<text.length; i++){
      if (alphabet.indexOf (text [i])!=-1){
          let  posicion = ((alphabet.indexOf(text[i])+displacement)%26);
          result += alphabet[posicion];
      }
      else 
          result += text[i];
   }

}
return result;
}

function cipher2 (text, displacement){
if (!text)
   return "";
   const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
displacement = (displacement % 26 + 26)% 26;
return text.replace (/[A-Z]/ig, c=> alphabet [(alphabet.indexOf(c)+displacement)%26]);

}
function decipher (text, displacement){
if (!text)
   return "";
   const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

displacement = (displacement % 26 - 26)% 26;

return text.replace (/[A-Z]/ig, c=> alphabet [(alphabet.indexOf(c)-displacement)%26]);

}
