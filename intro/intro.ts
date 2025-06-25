var greeting: string = 'Hello Shahith';
console.log(greeting);

let num: number = 4;

2;
let hero; // type will be assigned here as, any, will turn off the type checking

function getHero(): string {
  return 'thor';
}

hero = getHero();

3;

function wrong(val) {
  return val.toUppercase();
}

wrong(4); // it should pass string no type check

4;

function login(name: string, email: string, isPaid: boolean = false) {}

login('shahith', 'sha@gmail.com');

function moreArgument(
  one: string = 'a',
  two: string,
  three: string,
  four: string
) {}

moreArgument('b', 'c', 'd', 'e');

5;

function addValue(val: number): number {
  return val + val;
}

let myValue = addValue(5); // it will be infer as number because addValue will definitely return number
console.log(myValue);

//const heros = [1,2,3,4,5]
const heros = [1, 2, 3, 'string']; // it will have error cannot be applied to types 'string | number' and 'number'

heros.map((hero) => {
  return hero + 5;
});

//  TypeScript cannot guarantee what hero + 5 will mean—it could be a number addition
//  or a string concatenation—hence it throws a type error.

//correct way

heros.map((hero) => {
  if (typeof hero === 'number') {
    return hero + 5;
  } else {
    return hero + 5; // or any other desired logic for strings
  }
});
export {};
