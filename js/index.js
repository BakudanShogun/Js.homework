// Ex 1

// let answer = prompt("What is the official name of JavaScript?");

// if (answer === "ECMAScript") {
//   alert("Correct!");
// } else {
//   alert("Incorrect ;-(");
// }

// Ex 2

// let road = "closed";

// for (let i = 0; i < 100; i++) {
//   if (road === "closed") {
//     console.log("Turn right");
//   } else {
//     console.log("Turn left");
//   }
// }

// Ex 3

let login = prompt("Enter login");
let password;
console.log(login);

if (login === "admin") {
  password = prompt("Enter password");

  if (!password) {
    console.log("Denied ;-(");
  } else if (password === "qwerty") {
    console.log("Hello, Ilya :-)");
  } else {
    console.log("Wrong password ;-(");
  }
} else {
  console.log("I dont know you ;-(");
}

// Ex 4

// const daysUmtilDeadline = 2;

// if (daysUmtilDeadline === 0) {
//   console.log("Today");
// } else if (daysUmtilDeadline === 1) {
//   console.log("1 day left");
// } else if (daysUmtilDeadline === 2) {
//   console.log("2 days left");
// } else if (daysUmtilDeadline >= 3) {
//   console.log("Some times");
// }
