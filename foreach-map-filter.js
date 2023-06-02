function doubleValues(arr){
    return arr.map(num => num*2);
 }
 
 function onlyEvenValues(arr){
    return arr.filter(num => num%2 === 0);
 }
 
 function showFirstAndLast(arr){
    return arr.map(str => str[0]+str[str.length-1]);
 }
 
 function addKeyAndValue(arr,key,value){
    return arr.map(obj => {
       obj[key] = value;
       return obj;
    });
 }
 
 function vowelCount(str){
    let vowels = "aeiou";
    let obj = {};
    for(let char of str.toLowerCase()){
       if(vowels.includes(char)){
          obj[char] = (obj[char] || 0) + 1;
       }
    }
    return obj;
 }
 
 function doubleValuesWithMap(arr) {
    return arr.map(num => num*2);
 }
 
 function valTimesIndex(arr){
    return arr.map((num, idx) => num*idx);
 }
 
 function extractKey(arr, key){
    return arr.map(obj => obj[key]);
 }
 
 function extractFullName(arr){
    return arr.map(obj => obj.first + " " + obj.last);
 }
 
 function filterByValue(arr, key) {
    return arr.filter(obj => obj[key]);
 }
 
 function find(arr, searchValue) {
    return arr.filter(val => val === searchValue)[0];
 }
 
 function findInObj(arr, key, searchValue) {
    return arr.filter(obj => obj[key] === searchValue)[0];
 }
 
 function removeVowels(str) {
    let vowels = "aeiou";
    return str.toLowerCase().split("").filter(char => !vowels.includes(char)).join("");
 }
 
 function doubleOddNumbers(arr) {
    return arr.filter(num => num%2 !== 0).map(num => num*2);
 }
 