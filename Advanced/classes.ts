class User {
  public name: string;
  age: number;
  private readonly city: string = 'Chennai';
  protected email: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private deleteUser() {
    this.name = '';
    this.age = 0;
  }

  // public wrapper
  public performDelete() {
    this.deleteUser();
  }

  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setAge(age: number) {
    if (age < 18) {
      this.age = 18;
      throw new Error('Not legal age');
    }
    this.age = age;
  }

  get getCity(): string {
    return this.city;
  }
}

// short and optimized way

// class User {
//     constructor(
//         public name:string,
//         private age:number,
//         public userId:string
//     ) {
//     }
// }

// private variable in the User class cannot be access in the SubUser but public and protected can.

// Protected can be access only in same class and inheritance class and not outside.

class SubUser extends User {
  isFamily: boolean;
  changeEmail() {
    this.email = 'sha@gmail.com';
  }
}

const person = new User('shahith', 23);

console.log(person.getName); // Outputs: "shahith"
person.setName = 'abith';
person.setAge = 10;
console.log(person.getName); // Outputs: "abith"
person.performDelete();
console.log(person.getName); // Outputs: ""

const subPerson = new SubUser('senthil', 45);

// public, private and protected are access modifiers that limit the access

// public will be default

// private can access only within the class


export {};
