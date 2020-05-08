/**
 * 
 * @param {String} x a binary number in form string
 * @param {*} y a binary number in form string
 */
const Bcalculculator = (x, y) => {
    let x_index = x.length -1 , y_index =y.length -1 
    const max_index = x_index < y_index ? y_index : x_index;
    let carry = 0;
    let result = 0;
    // the core idea=> say 101 + 111, loop starts from the right...picking one bit from each of the operands during each iteration
    // i.e for first iteration, 1 and 1 is picked, necessary operation is performed on them to get the carry and the value that will be retained in
    // the final binary value after the sum...there is no point keeping track of the resulting binary answer. What is done instead is to check if the value
    // of that would have been retained in the final binary answer is 1 or 0...this conditional operation is done by the the if statement in the loop
    // i.e if s is 1 just add 2 to the appropriate power to  the result. This is just the same as the normal binary to decimal conversion, only that the  
    // computation here is carried out on the fly(without waiting to know the final binary sum)
    while(x_index >= 0 || y_index >= 0){
        let temp_x = Number(x[x_index]) || 0
        let temp_y = Number(y[y_index]) || 0
        
        let d = Math.floor(( temp_x + temp_y + carry)/2 );

        let s= temp_x + temp_y + carry - 2*d;

        if (s==1) result += Math.pow(2,max_index - (x_index < y_index ? y_index : x_index ));
        carry = d;
        x_index--;
        y_index--;
    }
    // if carry is 1 just add 2 to the power of max_index+1
    return carry ===1? result += Math.pow(2, max_index+1) : result;
}

// quick test
console.log(Bcalculculator("11","110"));