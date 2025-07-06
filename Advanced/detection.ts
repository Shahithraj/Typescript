// in operator

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin): boolean {
  // account.isAdmin --> cannot able to access bcoz User does not have isAdmin

  if ('isAdmin' in account) {
    return account.isAdmin;
  }
  return false;
}

// instanceof

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Discriminated Union

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

function getValue(shape: Circle | Square) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2; // pi * r ** 2
  }
  return shape.side * shape.side;
}

// Exhaustiveness checking

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    default:
      const defaultShape: never = shape;
      return defaultShape;
  }
}
