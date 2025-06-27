
// enum values make increment subsequently
1.
enum SeatChoice {
    AISLE = 1,
    MIDDLE = 2,
    WINDOW = 3
}


const seat = SeatChoice.MIDDLE;

console.log(SeatChoice[1]); // it logs AISLE



2.

enum CardinalDirections {
  North = 100,
  East = 200,
  South = 205,
  West = "west"
}
// logs 100
console.log(CardinalDirections.North);
// logs "west"
console.log(CardinalDirections.West);

3.

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Subscriber = "Subscriber",
  Guest = "Guest"
}

// logs "Admin"
console.log(UserRole.Admin);

// logs "Guest"
console.log(UserRole.Guest);


// Execution of JS

var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const seat = SeatChoice.MIDDLE;

1.
var SeatChoice;
Declares a variable to hold the enum.

2.
(function (SeatChoice) { ... })(SeatChoice || (SeatChoice = {}));
This is an Immediately Invoked Function Expression (IIFE).

If SeatChoice already exists, it uses it.

If not, it initializes it to an empty object {}.

3.

SeatChoice["AISLE"] = 1; → sets key "AISLE" to value 1.

SeatChoice[1] = "AISLE"; → sets reverse mapping, so you can do SeatChoice[1] and get "AISLE".

 Final Structure of SeatChoice Object:

 {
  "1": "AISLE",
  "2": "MIDDLE",
  "3": "WINDOW",
  AISLE: 1,
  MIDDLE: 2,
  WINDOW: 3
}

So you can do:

SeatChoice.AISLE → 1

SeatChoice[1] → "AISLE"
