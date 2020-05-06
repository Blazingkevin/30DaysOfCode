/**
 * 
 * @param {Number} limit  the highest limit of the range from which prime number is to be generated
 */
const OptimusPrime = (limit) =>  {
    // The core Discrete Math principle used to select the prime is Sieve of Eratosthenes 
    //prime_bool keeps track of the boolean value that indicates whether element at that index is prime
    // sieveLimit is one of the requirements to increase performance of sieve of eratosthenes...It stems from the 
    // theory the given limit n and Array(2... n), if multiples of all primes less than or equal to the square root of n are removed
    // the remaining values are prime numbers between 1 and n... since we dont have to test all values to check if they are prime,
    // it's relatively faster. 
    const prime_bool = []
    const  sieveLimit = Math.sqrt(limit)
   
    //initialize prime_bool, assume all to be prime
    for (let i = 0; i < limit; i++) {
        prime_bool.push(true);
    }

    // taking note of the sieveLimit, apply sieve of Eratosthenes (i.e cancelling out all multiples of prime true the loop)
    //done simply by setting the value of the cancelled index to false...in the end, we have a true value for just the index
    // that results to prime
    for (let i = 2; i <= sieveLimit; i++) {
        if (prime_bool[i]) {
            for (let j = i * i; j < limit; j += i) {
                prime_bool[j] = false;
            }
        }
    }

    // since the indices represent the prime values, we can simply check for the indices wher we have the value true
    // and build the required prime array from those indices
    const seived = [];
    for (let i = 2; i < limit; i++) {
        if(prime_bool[i]) {
            seived.push(i);
        }
    }
   
    return seived;
};

console.log(OptimusPrime(50));