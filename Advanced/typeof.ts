const userName = "Max";

console.log(typeof userName) ; // string

type UserName = typeof userName; // 'Max'

const personName:UserName = 'Max'; 
//const personName1:UserName = 'Shahith'; // Error, only 'Max' can be assigned


let userName2 = "Max";

console.log(typeof userName2) ; // string

type UserName2 = typeof userName2; // 'Max'

const personName2:UserName2 = 'Shahith'; // only 'Max' can be assigned