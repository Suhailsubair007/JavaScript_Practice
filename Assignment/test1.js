
let day = parseInt(prompt("Please enter a number : "));

switch (day) {
  case 1:
    day = "Sunday";

    break;

  case 2:
    day = "Monday";
    break;

  case 3:
    day = "Tuesday";

    break;

  case 4:
    day = "Wednesday";

    break;

  case 5:
    day = "Thursday";
    break;

  case 6:
    day = "Friday";

    break;
  case 7:
    day = "Saturday";

    break;

  default:
    day = "Invalid Entry";
    break;
}
console.log(day);

