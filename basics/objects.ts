1;
function emptyObj(): {} {
  return {};
}

emptyObj();

2;

function nonEmptyObj(): { name: string } {
  return {};
}

nonEmptyObj();

// It should return the return obj

3;

function userObj(): {} {
  return { name: 'shahith', age: 26 };
}

userObj();

// The {} does not mean "empty object" in TypeScript.
// It actually means: any non-null and non-undefined object.

4;

function userNonEmptyObj(): { name: string; age: number } {
  return { name: 'shahith', age: 26 };
}

userNonEmptyObj();

// Type Aliases

type User = {
  readonly id: string;
  name: string;
  age: number;
  email: string;
  skills?: [];
};

const user: User = {
  id: '1',
  name: 'shahith',
  age: 26,
  email: 'shahith@gmail.com',
};

user.email = 'sha@gmail.com';
// user.id = '2'; // can't able to update the read only property

function createUser(user: User) {}

createUser({ id: '1', name: 'shahith', age: 26, email: '' }); // need to pass all property of User

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: string;
  };

const cardDetail: CardDetails = {
  cardNumber: '',
  cardDate: '',
  cvv: '',
};

export {};
