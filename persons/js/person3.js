const person = {
  firstName: "Reza",
  lastName: "Mohammadi",
  age: 28,
};

const currentYearGregorian = new Date().getFullYear();
const currentYearShamsi = 1403;

document.getElementById("fullName").innerText = `${person.firstName} ${person.lastName}`;
document.getElementById("age").innerText = person.age;
document.getElementById("yearBornMiladi").innerText = currentYearGregorian - person.age;
document.getElementById("yearBornShamsi").innerText = currentYearShamsi - person.age;
