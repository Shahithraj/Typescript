'use strict';
interface User {
  readonly id: number;
  name: string;
  email?: string;
  //startTrial: () => string;
  startTrial(): string;
  getCoupon(name: string, val?: number): number;
}

interface User {
  googleId: string;
}

interface Admin extends User {
  role: string;
}

const myUser: User = {
  id: 1,
  name: 'shahith',
  startTrial() {
    return '';
  },
  getCoupon: (name: string, val?: number) => {
    return 100;
  },
  googleId: 'sha@gmail.com',
};

const admin: Admin = {
  id: 1,
  name: 'shahith',
  startTrial() {
    return '';
  },
  getCoupon: (name: string, val?: number) => {
    return 100;
  },
  googleId: 'sha@gmail.com',
  role: 'Admin',
};

console.log(myUser.getCoupon(myUser.name));

// Why Interface is important

interface TakePhoto {
  cameroMode: string;
  filter: string;
  edit: boolean;
  createVideo(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameroMode: string,
    public filter: string,
    public edit: boolean
  ) {}

  createVideo(): void {
    console.log('Creating Instagram video...');
  }
}

// You cannot define a method like createVideo(): void directly in the constructor like a property.

// In TypeScript, methods should be declared inside the class body, not in the constructor.

class YouTube implements TakePhoto {
  constructor(
    public cameroMode: string,
    public filter: string,
    public edit: boolean,
    public short: string
  ) {}

  createVideo(): void {
    console.log('Creating YouTube video...');
  }
}

// interface A { a: number }
// interface B extends A { b: number }

// type: flexible, composable
// type A = { a: number }
// type B = A & { b: number }

// interface vs type

// 1. Cannot duplicate type but interface can.
// 2. Interface can extends but type can using &.
// 3. type can have primitive type

export {};
