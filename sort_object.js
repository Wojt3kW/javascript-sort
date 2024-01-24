"use strict";

let array = [
  { name: "c", order: 2 },
  { name: "a", order: 0 },
  { name: "d", order: 3 },
  { name: "b", order: 1 },
];
console.log("input array", array);

let sorted_array = array.map((a) => ({ ...a })).sort();
console.log("sorted", sorted_array);

array = [
  { name: "c", order: 2 },
  { name: "a", order: 0 },
  { name: "d", order: 3 },
  { name: "b", order: 1 },
  { name: "e", order: 4 },
];
console.log("input array", array);

sorted_array = array.map((a) => ({ ...a })).sort((i) => i.order);
console.log("sorted", sorted_array);

array = [
  { name: "c", order: 2 },
  { name: "d", order: 3 },
  { name: "b", order: 1 },
  { name: "x", order: -1 },
  { name: "a", order: 0 },
  { name: "e", order: 4 },
];
console.log("input array", array);

sorted_array = array.map((a) => ({ ...a })).sort((i) => i.order);
console.log("sorted", sorted_array);

let employees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: new Date("2017-12-30"),
  },

  {
    id: 100,
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: new Date("2019-01-01"),
  },

  {
    id: 10,
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: new Date("2011-05-15"),
  },
];
console.log("input employees", employees);

console.log(
  "employees order by ID asc",
  employees.map((a) => ({ ...a })).sort((l, r) => l.id - r.id)
);
console.log(
  "employees order by ID desc",
  employees.map((a) => ({ ...a })).sort((l, r) => r.id - l.id)
);
console.log(
  "employees order by AGE asc",
  employees.map((a) => ({ ...a })).sort((l, r) => l.age - r.age)
);

console.log(
  "employees order by JD asc",
  employees
    .map((a) => ({ ...a }))
    .sort((l, r) => {
      return l.joinedDate - r.joinedDate;
    })
);

console.log(
  "employees order by JD asc",
  employees
    .map((a) => ({ ...a }))
    .sort((l, r) => {
      return l.joinedDate.getTime() - r.joinedDate.getTime();
    })
);

console.log(
  "employees order by JD asc",
  employees
    .map((a) => ({ ...a }))
    .sort((l, r) => {
      return +l.joinedDate - +r.joinedDate;
    })
);

console.log(
  "employees order by FN asc",
  employees
    .map((a) => ({ ...a }))
    .sort((l, r) => {
      return l.firstName.localeCompare(r.firstName, "pl");
    })
);
