"use strict";

let array = [1, 7, 3, 5, 4, 6, 2];
console.log("input array", array);

let sorted_array = [...array].sort();
console.log("sorted", sorted_array);

array.push(1);
console.log("input array with new element at the end", array);

sorted_array = [...array].sort();
console.log("sorted", sorted_array);

array.unshift(2);
console.log("input array with new element at the beginning", array);

sorted_array = [...array].sort();
console.log("sorted", sorted_array);

array = [1400, 99, 104];
console.log("input array", array);

sorted_array = [...array].sort();
console.log("sorted", sorted_array);

array = [1400, 99, 104];
console.log("input array", array);

sorted_array = [...array].sort((l, r) => {
  return l - r;
});
console.log("sorted asc", sorted_array);

sorted_array = [...array].sort((l, r) => {
  return r - l;
});
console.log("sorted desc", sorted_array);

array = [1, 1400, 99, 104, 1];
console.log("input array", array);

sorted_array = [...array].sort((l, r) => {
  return l > r ? 1 : -1;
});
console.log("sorted asc", sorted_array);

sorted_array = [...array].sort((l, r) => {
  return l > r ? -1 : 1;
});
console.log("sorted desc", sorted_array);

sorted_array = [...array].sort(compare);
console.log("sorted compare", sorted_array);

function compare(l, r) {
  if (l > r) {
    return 1;
  } else if (l < r) {
    return -1;
  } else {
    return 0;
  }
}

array = [1400, 99, 104, 1, 1];
console.log("input array", array);

sorted_array = [...array].sort((l, r) => {
  return l > r ? 1 : l < r ? -1 : 0;
});
console.log("sorted asc", sorted_array);

sorted_array = [...array].sort((l, r) => {
  return l > r ? -1 : l < r ? 1 : 0;
});
console.log("sorted desc", sorted_array);
