"use strict";

let array = ["a", "c", "f", "b", "d", "g", "e"];
console.log("input array", array);

const sorted_array1 = [...array].sort();
console.log("sorted", sorted_array1);

array.push("a");
console.log("input array with new element at the end", array);

const sorted_array2 = [...array].sort();
console.log("sorted", sorted_array2);

array.unshift("a");
console.log("input array with new element at the beginning", array);

const sorted_array3 = [...array].sort();
console.log("sorted", sorted_array3);

const new_array1 = ["A", "a", "Ą", "ą", "Á", "ä", "á"];
console.log("input array", new_array1);

const sorted_array4 = [...new_array1].sort();
console.log("sorted", sorted_array4);

/**
 * Sort using localeCompare function
 * https://www.techonthenet.com/js/string_localecompare.php
 */
const sorted_array5 = [...new_array1].sort((a, b) => a.localeCompare(b));
console.log("sorted localeCompare   ", sorted_array5);

const sorted_array6 = [...new_array1].sort((a, b) =>
  a.localeCompare(b, "pl", { sensitivity: "base" })
);
console.log("sorted localeCompare pl", sorted_array6);

const sorted_array7 = [...new_array1].sort((a, b) =>
  a.localeCompare(b, "es", { sensitivity: "base" })
);
console.log("sorted localeCompare es", sorted_array7);

const sorted_array8 = [...new_array1].sort((a, b) =>
  a.localeCompare(b, "de", { sensitivity: "base" })
);
console.log("sorted localeCompare de", sorted_array8);


/**
 * Sort with null and undefined
 */
const new_array2 = ["A", undefined, "a", "Ą", null, "ą", "Á", "ä", "á"];
console.log("input array", new_array2);

const sorted_array9 = [...new_array2].sort();
console.log("sorted", sorted_array9);

const sorted_array10 = [...new_array2].sort(
  (a, b) => {
    return (a || "").localeCompare(b || "");
  },
  "pl",
  { sensitivity: "base" }
);
console.log("sorted localeCompare", sorted_array10);

const sorted_array11 = [...new_array2].sort((a, b) => {
  if (isNullOrUndefined(a) && isNullOrUndefined(b)) {
    return 0;
  }

  if (isNullOrUndefined(a)) {
    return -1;
  }

  if (isNullOrUndefined(b)) {
    return 1;
  }

  return a.localeCompare(b, "pl", { sensitivity: "base" });
});
console.log("sorted localeCompare", sorted_array11);

function isNullOrUndefined(arg) {
  return arg === null || arg === undefined;
}
