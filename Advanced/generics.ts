function one(val: number | string): number | string {
  return 1;
}

function two(val: any): any {
  return val;
}

function three<Type>(val: Type): Type {
  return val;
}

function four<T>(val: T): T {
  return val;
}

one('shahith'); // it can return number or string
two(3); // it can return anything
three(2); // it will return same Type passed as argument
three<string>('shahith');

function getSearchProduct<T>(products: T[]): T {
  // do some operation
  const index = 3;
  return products[index];
}

const getSearchList = <T>(products: T[]): T => {
  // do some operation
  console.log(products.length);
  const index = 3;
  return products[index];
};

function getProperty<Type extends object, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
//  getProperty(x, 'm');

// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
