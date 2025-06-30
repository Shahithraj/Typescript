class User {
    name : string;
    age: number;
    readonly city: string;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const person = new User("shahith",23);



export {};