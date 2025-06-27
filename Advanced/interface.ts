"use strict";
interface User {
    readonly id :number;
    name:string;
    email?:string;
    //startTrial: () => string;
    startTrial() : string;
    getCoupon(name:string, val?:number): number
}

interface User {
    googleId:string;
}

interface Admin extends User {
    role:string;
}

const myUser: User = {
    id:1,
    name:"shahith",
    startTrial () {
        return ""
    },
    getCoupon:(name: string, val?:number) => {
        return 100;
    },
    googleId:"sha@gmail.com"
}

const admin : Admin = {
     id:1,
    name:"shahith",
    startTrial () {
        return ""
    },
    getCoupon:(name: string, val?:number) => {
        return 100;
    },
    googleId:"sha@gmail.com",
    role:"Admin",
}

console.log(myUser.getCoupon(myUser.name));


interface A { a: number }
interface B extends A { b: number }

// type: flexible, composable
type A = { a: number }
type B = A & { b: number }


// interface vs type 

1. Cannot duplicate type but interface can.
2. Interface can extends but type can using &.
3. type can have primitive type


export {}
