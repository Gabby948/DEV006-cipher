
const cipher = {



  encode: (offsetNumber, message) => { //verificar si son string u objeto.
       
    //if(message === null || offsetNumber === 0) {
    //throw new TypeError }
    if (offsetNumber === null || message === ""|| offsetNumber === 0) {
      throw new TypeError("Solo letras mayusculas")
    }

    let encodeMessage = "";
    for (let i = 0; i < message.length; i++) {
      const character = message[i].charCodeAt();
    
      if (character >= 65 && character <= 90) {
        const messageAscii = (character - 65 + parseInt(offsetNumber)) % 26 + 65;
        encodeMessage += String.fromCharCode(messageAscii);
      }

      else {
        encodeMessage += character;
      }
    }
    return encodeMessage;
  },

  decode: (offsetNumber, message) => {

    if (offsetNumber === null || message === ""|| offsetNumber === 0) {
      throw new TypeError("Solo letras mayusculas")}

    let decodeMessage = "";

    for (let i = 0; i < message.length; i++) {
      const characterD = message[i].charCodeAt();
      if (characterD >= 65 && characterD <= 90) {
        const messageAsciiD = ((characterD - 65 - parseInt(offsetNumber)+26+26)% 26) + 65;
        decodeMessage += String.fromCharCode(messageAsciiD);
      }
      else {
        decodeMessage += characterD;
      }
    }
    return decodeMessage;
  }
};

export default cipher;