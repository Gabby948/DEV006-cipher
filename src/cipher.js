
 export default cipher;

 const cipher = {
  encode: encode,
  decode: decode }

 

  encode: (message, displacement) => {
  let encodeResult = "";
  
    for (let i=0; i<message.length; i++){
      let character = message [i];
      if (character.match (/[A-Z]/i)){
        let upperCaseMessage = message.toUpperCase();
        let messageAscii = (message.charCodeAt(i)-65+ parseInt (displacement)) %26+65;
        result += String.fromCharCode (messageAscii);        
      }
      else if(message === null || displacement === 0) {
        throw new TypeError

        }
       
      else{
        encodeMessage2 += character;
      }             
    }
    return encodeMessage2;
  },

  decode: (message2, displacement) => {
    let decodeResult = "";

    for (let i = 0; i < message2.length; i++) {
      let character2 = message2[i];
      if (character2.match(/[A-Z]/i)) {
        let upperCaseMessage2 =message.toUpperCase();
        let message2Ascii2 = (message2.charCodeAt(i) + 65 - parseInt(displacement)) % 26 + 65;
        decodeResult += String.fromCharCode(message2Ascii2);

      }
        else if(message2 === null || displacement === 0) {
          throw new TypeError
      } 

      else{
          decodeMessage2 += character2;
      }
    }
      return decodeMessage2; 
 }


 
