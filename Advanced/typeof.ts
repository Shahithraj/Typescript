const userName = "Max";

console.log(typeof userName) ; // string

type UserName = typeof userName; // 'Max'

const personName:UserName = 'Max'; 
//const personName1:UserName = 'Shahith'; // Error, only 'Max' can be assigned


let userName2 = "Max";

console.log(typeof userName2) ; // string

type UserName2 = typeof userName2; // 'Max'

const personName2:UserName2 = 'Shahith'; // only 'Max' can be assigned

// for const variable it will assign the value as a type
// for a let variable, it will assign the value type as a type

const settings = {
difficulty : 'easy',
minLevel : 10,
players:['shahith','abith']
}

type Settings = typeof settings; // automatically refered

// type Settings = {
//     difficulty: string;
//     minLevel: number;
//     players: string[];
// }

function loadData(settings:Settings) {

}

loadData(settings);

function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
 
type SumFn = typeof sum;
type SubtractFn = typeof subtract;
 
function performMathAction(cb: SumFn | SubtractFn) {
  // some code...
}