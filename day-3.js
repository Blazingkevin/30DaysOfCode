/**
 * 
 * @param {Number} size required size 
 * @param {Number} num number that will be formatted by adding leading zeros
 */
const myPackaging = (size, num)=> {
    //case where num has leadind zeros e.g 023, remove the zeros
    if(String(num).length >= size) return String(num);
    /** 
    create an empty array of the same size as the expeted final length of the resulting string
    fill the array with dummy value, "0" ..create a new array by mapping through the zero-filled array and
    return zero by default during the mapping until you get to a breaking_index, which is the index at which
    we have gotten the number of zeros we need. Any iteration after this breaking_index during the mapping, should
    return charaters from the "num" arguement starting from the first character.
    At the end of it all we have array of characters in the required order. A join method does the final trick.
    NB: breaking_index is saved in the empty object(second arguement of the map function) 
    */
    return Array(size).fill(0).map((_, index)=>{
        if(index < size - String(num).length ) return 0;
        if(!this.breaking_index) this.breaking_index = index;
        return String(num).charAt(index - this.breaking_index);     
    },{}).join("")
}

//quick test
console.log(myPackaging(5, 647));