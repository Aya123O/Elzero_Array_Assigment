let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.length - (++num),myFriends.length - true)); // ["Ahmed", "Elham", "Osama"];
//Methode 3
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
/*********************************************************************************************************** */
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]
/***************************************************************************************************************** */
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr=(finalArr.concat(arrOne,arrTwo)).sort().reverse();


console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
/*************************************************************************************************************** */
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let temp=words.pop();
// temp=temp[0];
console.log(temp.length)
console.log(temp[0].slice(--temp.length).toUpperCase()); // ZERO
/**************************************************************************************************************** */
let needle = "JS";
let haystack = ["PHP","JS" ,"Python"];
if(haystack.includes(needle)){
  console.log("found");
}
//Method 2
let res1=haystack.indexOf(needle);
if(res1 != -1){
  console.log("found");
}
//Method 3
let res2=haystack.lastIndexOf(needle);
if(res2 != -1){
  console.log("found");
}

/******************************************************************************************************** */
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs=allArrs.concat( arr1.pop(),arr2.pop(),arr2.pop());

console.log(allArrs.reverse().join("").toString().toLowerCase()); // fxy