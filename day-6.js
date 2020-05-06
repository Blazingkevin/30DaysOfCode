/**
 * method to encode/decode a given string
 * @param {String} input_string string to be encoded/decoded
 */
const Atongue = (input_string) => {
    //... had to combine consonants and vowel but took note of the breaking point(vowels starts at index 20)
    // the breaking point will be considered in the modulus calculation
    const letters = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f',
    'a', 'i', 'y', 'e', 'o', 'u'];

    const final_array=input_string.split("").map(char =>{
        //if character is not a letter, return as is
        if(letters.indexOf(char.toLowerCase()) == -1 ) return char;

        const position = letters.indexOf(char.toLowerCase());
        
        // check if character is a consonant or vowel, calculate position of the replacing character using modulus operation
        //  check if uppercase or lowercase(using its unicode value )  and return the replacing character appropriately
        if(letters.indexOf(char.toLowerCase()) <= 19){ // consonant
            const replace_pos = position + 10 < 20 ? position+10 : (position + 10)% 10;
            if(char.charCodeAt(0)>=65 && char.charCodeAt(0) <= 90){ // uppercase (based on unicode)
                return letters[replace_pos].toUpperCase(); //capital ;
            } 
            else{ //if(char.charCodeAt(0)>=90 && char.charCodeAt(0) <= 122 ) => lower case (based on unicode)
                return letters[replace_pos].toLowerCase();
            } 
        }
        else if(letters.indexOf(char.toLowerCase()) > 19){// vowel
            const hold = position -20 ;
            const replace_pos = (hold + 3 < 6? hold +3 : (hold + 3) % 6) + 20
            if(char.charCodeAt(0)>=65 && char.charCodeAt(0) <= 90){ // uppercase (based on unicode)
                return letters[replace_pos].toUpperCase()//capital ;
            } 
            else{ //if(char.charCodeAt(0)>=90 && char.charCodeAt(0) <= 122 ) => lowercase (based on unicode)
                return letters[replace_pos].toLowerCase();//small ;
            } 
        }
        
    })

    return final_array.join("");
}

//quick test...
console.log(Atongue('As a boss, I refuse to speak the tongue of Mortal Men'));
console.log(Atongue('Eh e pihh, O dagyha ni hbaev nsa nitfya ig Widnec Wat'));