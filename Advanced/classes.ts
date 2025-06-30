// class User {
//     public name : string;
//     age: number;
//     private readonly city: string;
//     constructor(name:string, age:number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// short and optimized way

class User {
    constructor(
        public name:string, 
        private age:number,
        public userId:string
    ) {
    }
}

const person = new User("shahith",23,"");

// public will be default



export {};
