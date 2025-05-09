const { checkNumberPadding } = require('./src/checkNumberPadding');

console.log(checkNumberPadding(["001", "002", "003"]));      // Expected: 3
console.log(checkNumberPadding(["1", "2", "999"]));          // Expected: 1
console.log(checkNumberPadding(["01", "002"]));              // Expected: -1
console.log(checkNumberPadding(["999", "9999"]));            // Expected: -3
console.log(checkNumberPadding(["001", "002", "3", "4"]));   // Expected: -1
console.log(checkNumberPadding([]));                         // Expected: 0
