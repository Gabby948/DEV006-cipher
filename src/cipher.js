
export default cipher;
const cipher = {



  encode: (offsetNumber, message) => { //verificar si son string u objeto.

    //if(message === null || offsetNumber === 0) {
    //throw new TypeError }


    let encodeMessage = "";
    for (let i = 0; i < message.length; i++) {
      const character = message[i];
      if (message[i](/[A-Z]/i)) {
        const messageAscii = (message.charCodeAt(i) - 65 + parseInt(offsetNumber)) % 26 + 65;
        encodeMessage += String.fromCharCode(messageAscii);
      }
      else if (message === null || offsetNumber === 0) {
        throw new TypeError ("Solo letras mayusculas")
      }
      else {
        encodeMessage += character;
      }
    }
    return encodeMessage;
  },
  decode: (offsetNumber, message) => {
    let decodeMessage = "";
    for (let i = 0; i < message.length; i++) {
      const characterD = message[i];
      if (characterD.match(/[a-z]/i)) {
        const messageAsciiD = (message [i].charCodeAt(i) + 65 - parseInt(offsetNumber)) % 26 + 65;
        decodeMessage += String.fromCharCode(messageAsciiD);
      }
      else if (message === null || offsetNumber === 0) {
        throw new TypeError ("Solo letras mayusculas")
      }
      else {
        decodeMessage += characterD;
      }
    }
    return decodeMessage;
  }
};

