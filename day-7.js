/**
 * 
 * @param {String} list_string  list in from of string
 */
const expense_report = (list_string) => {
    const list = list_string.split("\n");//make array from each line
    const balance = Number(list.shift());//since first line is balance, remove that from the list and store(size of the list reduce by 1)

    //items is an empty object that is later used in the following loop to store properties of each item in this form
    // {1: ["Atagungun", "35"],2:["Tatashey", "40"]}
    // Note: the regular expression was written to support name of times that has space i.e Tin Tomato becomes Tin_Tomato
    const items ={};
    list.forEach((item, index) => {
        items[index + 1] =[ item.match(/\s(.*?)\s|[a-zA-Z](.*?)\s/g).map(x=>x.trim()).join("_"), item.match(/(\d[\d.]*)/g) ] ;
    });
    let final_string ="Original_Balance:_" + balance.toFixed(2)  ;
    let new_balance = balance

    //at this point, items object has all items stored in the from described above
    // what's left is using the stored data for calculation and concatenating strings appropriately
    for(let i= 1; i<= list.length; i++){
        new_balance -= Number(items[i][1][1]);
        final_string += "\n";
        final_string += `${i}_${items[i][0]}_${items[i][1][1]}_Balance_${new_balance.toFixed(2)}`
    }
    final_string += `\n${list.length + 1}_Neighbor_50.00_Balance_${(new_balance -= 50).toFixed(2)}`
    const total_exp =balance - new_balance
    final_string +=`\nTotal_expense__${total_exp.toFixed(2)}\nAverage_expense__${(total_exp/(list.length+1)).toFixed(2)}`

    return final_string;

}

//quick tests

//  console.log(expense_report("1000.00\n1 Market 125.45\n2 Hardware 34.95\n3 Video 7.45\n4 Book 14.32\n5 Gasoline 16.10"));

//  console.log(expense_report("2000.00\n1 Potato Chips 125.45\n2 Shoe horn 34.95\n3 Video Game 7.45\n4 Book Rack 14.32\n5 Gasoline Gallon 16.10\n6 Paint 200.56\n7 Cashew Nuts 20.32\n8 Big Black Bucket 20.67"));