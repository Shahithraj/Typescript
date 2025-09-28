type StringArray = string[];

type ElementType<T extends any[]> = T[number];

type ElementArray =  ElementType<StringArray>; // string

let text = 1;

// type ElementText =  ElementType<typeof text>;  // error because it only access any[];

// make it conditionally

type ElementTypeCoditional<T> = T extends any[] ? T[number] :  T;

type ElementTextCorrect =  ElementTypeCoditional<typeof text>;