// Problem Statement #
// Write a program that accepts a day name from the user in the variable, then shows the name of the following day. Incorrect inputs must be taken into account.

// Input #
// // Enter day : Monday
// Expected Output #
// Following day : Tuesday

const day = prompt("Enter a day of the week").toLowerCase();
alert(`Your input was ${day}`);
const daysOfTheWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

if (!daysOfTheWeek.includes(day)) {
  alert("Please enter a valid day");
}

if (daysOfTheWeek.includes(day)) {
  if (day === "sunday") {
    alert("Tomorrow is Monday");
  } else if (day === "monday") {
    alert("Tomorrow is Tuesday");
  } else if (day === "tuesday") {
    alert("Tomorrow is Wednesday");
  } else if (day === "wednesday") {
    alert("Tomorrow is Thursday");
  } else if (day === "thursday") {
    alert("Tomorrow is Friday");
  } else if (day === "friday") {
    alert("Tomorrow is Saturday");
  } else if (day === "saturday") {
    alert("Tomorrow is Sunday");
  }
}
