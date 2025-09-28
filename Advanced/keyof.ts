type UserDetail = {name:string; age:number}

type UserKeys = keyof UserDetail;

let validKey:UserKeys;

validKey = 'age';
validKey = 'name';

// validKey holds only keys of User type