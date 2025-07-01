let flag: number | string | boolean = true;

flag = '1';

type User = {
  name: string;
};

type Admin = {
  username: string;
};

let person: User | Admin = {
  name: 'shahith',
};

person = {
  username: 'shah',
};

const arr: string[] | number[] = [1, 2, 3]; // can only be all number or all string

const mixArr: (string | number | boolean)[] = [1, 2, '3', true];

type Seat = 'window' | 'middle' | 'aisle';

let seatAllotment: Seat = 'window';

seatAllotment = 'aisle';

seatAllotment = 'crew'; // error

export {};
