"use strict";
let sum = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};
console.log(sum([5, 4, 12, 24, 10, 18, 2])); //node index.js to see the output
//# sourceMappingURL=index.js.map