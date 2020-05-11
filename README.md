# 30 DAYS OF CODE (Backend Track)


## DAY 1
Write a function that takes two strings, str1 and str2 . It checks if there are characters in str1  that can be selected and arranged to reproduce
str2 . 
##### Example:
 **scrable ("I game in rain","raining")** returns *True* , **scrable("football lovers", "lovely")** returns *False*.

## DAY 2
Write a function that takes a positive integer arguement. It returns the number of times each digit in the integer will be multiplied to get a single digit.
#####Example:
 **myFunction(26)** should return *2* (since 2 x 6 is 12, 1 x 2 is 2...it took *2* steps to get a single digit).

## DAY 3
Write a function that takes in two integer parameters. The first parameter is the required size(number of digits), while the second parameter is the number which would be formatted by adding leading zeros to meet the required size specified by the first parameter. The function returns the newly formatted number with the leading zeros added in form of a string. If the required number of digits is less than the number of digits the second parameter contains, return as is.
#### Example:
**myPackaging(5,22)===’00022’** 

## Day 4: (Optimus) Prime Time
There is an urgent need for prime numbers. Write a function that 
takes in an integer and returns an array containing all the prime 
numbers between 1 and the given input. Algorithmic efficiency(lower time of computation)
is needed for full points.
##### Example:
 OptimusPrime(11)===[2, 3, 5, 7, 11]

## Day 5: NO_7

It is 2006, and you are using a nokia 3310; space impact is still the best game in the world.
 Mid game, your mum asks you to text(SMS not whatsapp for some of you kids) a long string of numbers 
 to you dad(I don’t know why she would send numbers either) on her behalf since the battery to her 
 phone is low. Normally, this would have been fine. But there is one problem. Your button “7” is not
  working, and there are a bunch of “7” all over this given number. But there is a solution.
   You can just send him a text with two different sets of numbers both lacking 7s that he can add 
   together himself(Bomblocat can’t you call?). 

Task:

Write a function that takes in an integer and returns an array containing two integers that when added
 together gives the number your mum asked you to text.
##### Example:
noSeven(70)=[50,20]//50+20 is 70
noSeven(717)=[506,211]//506+211 is 717

**Note** there are multiple solutions/approaches to solving this. I will be grading based on cleanliness of code, 
speed of execution as compared to my solution and of course correctness of solution.
My test cases would be large integers which would highlight differences in performance. So ensure to put some 
thought into your solution.

## Day 6: Akins Tongue
Since birth, Akin has always spoken english. But one day, he
 decides he deserves his own language as a boss. So he encodes the english language and creates his own tongue.
To do this, he groups his letters into two lists of his own order, vowels and consonants.
This operation is carried out by substituting vowels in this order 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three steps forward,
cyclically, while maintaining its case (i.e., lower or upper).
Similarly, the consonants are substituted in the sequence 
'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' ten steps forward cyclically. 
**Note**: This works the same way when decoding.
Task: 
Write the function Akin would use to code and decode his language before he crams it. 
It would take a string as input and return a string as output
##### Example:
Atongue(“As a boss, I refuse to speak the tongue of Mortal Men”)===”Eh e pihh, O dagyha ni hbaev nsa nitfya ig Widnec Wat”

Try reading it outloud...It does sound cool


## Day 7: Expense Report

It is the first Saturday after the lockdown was eased and there is a need to visit the market to get some items. You have a list on which the items to be
 bought are written on. The list is in the form of a string and would contain alphanumeric characters as such:
"1000.00
1 Market 125.45
2 Hardware 34.95
3 Video 7.45
4 Book 14.32
5 Gasoline 16.10"
The first line shows the original balance. Each other line gives information: item number, item, cost.
There is one problem though, you have no intention of risking your life. The only option is to send a neighbor who charges 50 for the errand.

Task:
Create a simple expense report by following the steps below.
First you have to clean the lines keeping only letters, digits, dots.
Secondly, add the neighbors fee as an expense. Then return a report as a string replacing all spaces with underscores.

"Original_Balance:_1000.00
1_Market_125.45_Balance_874.55
2_Hardware_34.95_Balance_839.60
3_Video_7.45_Balance_832.15
4_Book_14.32_Balance_817.83
5_Gasoline_16.10_Balance_801.73
6_Neighbor_50.00_Balance_751.73
Total_expense__248.27
Average_expense__41.38"

On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense.
**NOTE**:THE REPORT IS A SINGLE STRING.


## Day 8: Bit calculator.
Write a function that takes two input binary numbers in form of a string and returns the decimal equivalent.
##### Example:
Bcalculator("10","10")===4
Bcalculator("101" ,"10")===7

Do not use inbuilt math functions apart from the following excemptions: pow, round, random for javascript and their equivalent in other languages.
 
## Day 9: Na-Ru-To
Write a function that takes in an integer and returns an array with elements described below:
For every number between 1 and the input argument included, check if the number is divisble by 2,3 or 5. If the number is divisible by 2, the number is replaced by Na. if the number is divisible by 3, it is replaced by Ru. If the number is divisble by 5, it is replaced by To. Numbers that are divissible by
more than one of these numbers are replaced by the individual syllables seperated by hyphen. eg 6 is replaced by "Na-Ru", 10 is replaced by "Na-To". 30 is replaced by "Na-Ru-To". Numbers that are not divisible by these numbers remain as is. The output is an array with arrangement of the replacement elements maintaining their original numerical order. 1 is included
##### Example:
naruto(10) returns [1,"Na","Ru","Na","To","Na-Ru",7,"Na","Ru","Na-To"]

## Day 10: Simple Signup validator
Write a function that takes in 2 strings. The first one is the email address, the second is the password and returns an object specified below.
Without using regex, verify that the email address is valid. If valid, create an object with property "email" and assign as true else, assign as false.
For the password verify that it has at least one Uppercase letter, at least one lowercase letter, at least one alphanumeric character, at least one number
and at least 8 character long. If the password is valid, let the object have property "password" assigned to true else, false.
##### Example:
validate("akinwandeakiboluwarin@gmail.com","YOucan'tgetmyPassword1") returns {email:true , password:true}



### How to run my solutions
* clone the repo
* Run **node day-x** (where x is the integer representing the day associated with a given task)