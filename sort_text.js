"use strict";

let array = ['a', 'c', 'f', 'b', 'd', 'g', 'e'];
console.log('input array', array);

let sorted_array = [...array].sort();
console.log('sorted', sorted_array);


array.push('a');
console.log('input array with new element at the end', array);

sorted_array = [...array].sort();
console.log('sorted', sorted_array);



array.unshift('a');
console.log('input array with new element at the beginning', array);

sorted_array = [...array].sort();
console.log('sorted', sorted_array);



// https://www.techonthenet.com/js/string_localecompare.php
array = ['A', 'a', 'Ą', 'ą', 'Á', 'ä'];
console.log('input array', array);

sorted_array = [...array].sort();
console.log('sorted', sorted_array);

sorted_array = [...array].sort((a, b) => a.localeCompare(b))
console.log('sorted empty', sorted_array);

sorted_array = [...array].sort((a, b) => a.localeCompare(b, 'pl', { sensitivity: 'base' }))
console.log('sorted pl', sorted_array);

sorted_array = [...array].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
console.log('sorted es', sorted_array);

sorted_array = [...array].sort((a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }))
console.log('sorted de', sorted_array);



array = [undefined, 'A', 'a', 'Ą', 'ą', 'Á', 'ä', null];
console.log('input array', array);

sorted_array = [...array].sort();
console.log('sorted', sorted_array);

sorted_array = [...array].sort((a, b) => {
    return (a || '').localeCompare(b || '');
}, 'pl');
console.log('sorted', sorted_array);

sorted_array = [...array].sort((a, b) => {
    if ((a == null || a == undefined)
        && (b == null || b == undefined)) {
        return 0;
    }

    return a.localeCompare(b, 'pl', { sensitivity: 'base' });
});
console.log('sorted', sorted_array);
