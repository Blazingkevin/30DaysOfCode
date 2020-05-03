const scrabble = (str1, str2) => {
    //clean the space between characters,convert to lowercase , and to array
    str1 =str1.replace(/\s/g, '').toLowerCase().split("");
    str2 =str2.replace(/\s/g, '').toLowerCase().split("");
    /**
     * A condition to quickly consider false is
     * - if str1 is less than str2 in number of characters.
     */
    if (str1.length < str2.length) return false ; 
   
    //core functionality to check if each character in str2 is present in str1
    //deleting the confirmed cases on each iteration to avoid duplicates
    const result = str2.every((value, index)=> {
        // if the index is not 0, remove the character that was found found in the
        // previous iteration from str1
        if(index !=0 ){
            const indexToRemove = str1.indexOf(str2[index-1]);
            str1.splice(indexToRemove,1);
        }
        return str1.includes(value);
    }, str1 ) ;
    return result;
}


// simple test
let str1 ="keivghbckjviv.//////v  v nisi"
let str2 ="kevinis"
console.log(scrabble(str1, str2));