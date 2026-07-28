var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 || age >= 18) {
  console.log("each month you get a salary");
} else if (age < 18) {
  console.log("the value of the age variable is not numerical");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("It's Monday");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  case "Wednesday":
    console.log("It's Wednesday");
    break;
  case "Thursday":
    console.log("It's Thursday");
    break;
  case "Friday":
    console.log("It's Friday");
    break;
  case "Saturday":
    console.log("It's Saturday");
    break;
  case "Sunday":
    console.log("It's Sunday");
    break;
  default:
    console.log("Looking forward to the Weekend");
}
