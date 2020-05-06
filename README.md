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

==Note== there are multiple solutions/approaches to solving this. I will be grading based on cleanliness of code, 
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
==Note:== This works the same way when decoding.
Task: 
Write the function Akin would use to code and decode his language before he crams it. 
It would take a string as input and return a string as output
##### Example:
Atongue(“As a boss, I refuse to speak the tongue of Mortal Men”)===”Eh e pihh, O dagyha ni hbaev nsa nitfya ig Widnec Wat”

Try reading it outloud...It does sound cool


### How to run my solutions
* clone the repo
* Run **node day-x** (where x is the integer representing the day associated with a given task)