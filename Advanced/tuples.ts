// A tuple is a fixed-length array with known types at each position.

// Tuple is declaring data type in an array for precise index

const tuple:[number, string,boolean] = [1,"shahith", true];

const rgb:[number,number,number] = [255,255,255];

type UserData = [number, string];

type User = {
    data : UserData
}

const user:User = {
    data:[1,"shahith"]
}

user.data[0] = 0;

user.data.push(2);

// .push() is allowed on tuples because tuples are arrays under the hood.

// But using .push() on tuples is unsafe and breaks their fixed-length, fixed-type purpose.