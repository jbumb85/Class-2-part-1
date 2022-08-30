// • Iterate through the array using a loop.
//    • If an object contains the name John, then print to the console "I found John!"
//    • If an object contains the name Jane, then print to the console "Hey Jane, do you know where John is?"
//    • If all else fails, then print Hey do you happen to know someone by the name of John?.

let people = [
  {
    name: "james",
    age: 34,
  },
  {
    name: "John",
    age: 43,
  },
  {
    name: "Jane",
    age: 23,
  },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].name === "John") {
    console.log("I found John");
  } else if (people[i].name === "Jane") {
    console.log("Hey Jane, do you know where John is?");
  } else {
    console.log("Hey, do you happen to know someone by the name of John");
  }
}
