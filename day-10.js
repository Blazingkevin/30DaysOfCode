/**
 * 
 * @param {String} email  Email address on which validation is to be performed
 * @param {String} password Password on which validation is to be performed
 */

const validate = (email, password) => {
    
    //validate password
    const validate_pass = () => {
        if(password.length < 8) return password_is_valid = false ;
        const record = {
            one_cap : false,
            one_low: false ,
            one_non_alpha : false,
            one_num: false
        }
        password.split("").forEach(char=> {
            console.log("here")
            if(char.charCodeAt(0)>=65 && char.charCodeAt(0) <= 90)  record.one_cap = true ;// uppercase (based on unicode)
            if(char.charCodeAt(0)>=90 && char.charCodeAt(0) <= 122 )  record.one_low = true; //lowercase   
            if(char.charCodeAt(0)<48 || (char.charCodeAt(0) > 57 && char.charCodeAt(0) < 65) ) record.one_non_alpha = true; //non alphanumeric        
            if(!isNaN(char)) record.one_num = true; //number
        })

        return (record.one_num && record.one_non_alpha && record.one_low && record.one_cap) 
    }

    //validate email....
    const validate_mail =() => {
        if(email.charCodeAt(0)<48 || (email.charCodeAt(0) > 57 && email.charCodeAt(0) < 65)) return false;
        const split_at = email.split("@");
        if (split_at.length != 2) return false ;//checks if the @ symbol divides the email address into two
        let [first_div, second_div] = split_at; 
        
        //check if "." is well placed
        if(first_div.includes(".")){
            if(first_div.indexOf('.') == 0 || first_div.indexOf('.')== first_div.length-1) return false;
        }
        else if(second_div.includes(".")){
            if(first_div.indexOf('.') == 0 || first_div.indexOf('.')== first_div.length-1) return false;
        }
        else{
            return false;
        }
        return true;
    }
    return {
        email: validate_mail(),
        password: validate_pass()
    }
    
    
}

console.log(validate("kevin.@gmail.com","B!3gfhj';jhgkasds"));