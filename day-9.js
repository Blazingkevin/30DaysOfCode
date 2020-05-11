/**
 * 
 * @param {Number} num  nax number on which divisiblity operation is to be carried out.
 */
const naruto = (num) => {
    const result =[]
    while(num >= 1 ){
        if(num % 30 == 0){
            result.unshift('Na-Ru-To');
        }
        else if(num % 15 == 0) {
            result.unshift('Ru-To');
        }
        else if(num % 10 == 0){
            result.unshift('Na-To')
        }
        else if(num % 6 == 0){
            result.unshift('Na-Ru')
        }
        else if(num % 5 == 0){
            result.unshift('To')
        }
        else if(num % 3 == 0){
            result.unshift('Ru');
        }
        else if(num % 2 == 0){
            result.unshift('Na')
        }
        else{
            result.unshift(num)
        }
        num--
    }

    return result;
}

//quick test
console.log(naruto(10));