// 
const noSeven = ( n ) => {
    //since my button 7 is not working, i will put all the burden on button "1" and "6" and "0"
    // To do this, split n into array of strings...create the exact array again but the only difference
    // will be that wherever there is 7, replace it with "1"...making a number from this new array of strings 
    // will produce n with all 7 in it replaced with 1
    // this new value is taken as the subtrahend...and when subtracted from n, will give the second value
    // E.g given 734...subtrahend will be 134...the other value will be 734 - 134=600.
    const subtrahend= Number(String(n).split("").map(x => x==="7"? "1" : x).join(""))
    return [n-subtrahend, subtrahend];
}

// quick test
console.log(noSeven(7347756));