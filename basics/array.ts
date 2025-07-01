// const heros = [];

// heros.push('spiderman');  Argument of type '"spiderman"' is not assignable to parameter of type 'never'

const heros: string[] = [];

heros.push('spiderman');

const skills: Array<string> = [];

skills.push('HTML');
skills.push('CSS');
skills.push('JS');

type User = {
  name: string;
  age: number;
};

const users: User[] = [];

users.push({ name: 'name', age: 20 });

const matrix: number[][] = [
  [255, 255, 255],
  [0, 0, 0],
];
