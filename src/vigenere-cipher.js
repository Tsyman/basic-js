class VigenereCipheringMachine {
    constructor(value = true) {
        this.direct = value;
    }

    encrypt(message, key) {
        if ( !message || !key ) {
            throw new Error("error");
        }

        message = message.toUpperCase();
        key = key.toUpperCase();
        
        const offset = "A".charCodeAt(0);
        const alphabetSize = 26;

        let result = "";
        let keyIndex = 0;
        for ( let i = 0; i < message.length; i++) {
            // if character not [A-Z] don't take this character
            if ( message.charCodeAt(i) < offset || message.charCodeAt(i) > offset + alphabetSize ) {
                result += message[i];
                continue;
            } else {
                let index = ((message.charCodeAt(i) - offset + key.charCodeAt(keyIndex) - offset) % alphabetSize) + offset;
                result += String.fromCharCode(index);
            }

            keyIndex++;
            if(keyIndex == key.length){
                keyIndex = 0;
            }
           
        }
        return this.direct ? result : result.split('').reverse().join('');
    }

    decrypt(message, key) {
        if ( !message || !key ) {
            throw new Error("error");
        }

        message = message.toUpperCase();
        key = key.toUpperCase();
        const offset = "A".charCodeAt(0);
        const alphabetSize = 26;

        let result = "";
        let keyIndex = 0;

        for ( let i = 0; i < message.length; i++) { 
            // if character not [A-Z] don't take this character
            if ( message.charCodeAt(i) < offset || message.charCodeAt(i) > offset + alphabetSize ) {
                result += message[i];
                continue;
            } else {
                let index = (((message.charCodeAt(i) - offset) + alphabetSize - (key.charCodeAt(keyIndex) - offset)) % alphabetSize) + offset
                result += String.fromCharCode(index);
            }
            keyIndex++;
            if(keyIndex == key.length){
                keyIndex = 0;
            }
        }
        return this.direct ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;