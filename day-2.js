/**
 * Recursively computes the number of times to multiply the digits in x to get a single digit
 * @param x any positive integer
 */
const myFunction = (x, count=0) => {
    if(String(x).split("").length === 1) return count;
    let product = 1 ;
    String(x).split("").forEach(x_string=> {
        product *= Number(x_string);
    })
    return myFunction(product, count=count+1);
}
//quick qest 
console.log(myFunction(26433456789));