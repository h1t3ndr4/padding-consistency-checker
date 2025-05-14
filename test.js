const { checkNumberPadding } = require('./src/checkNumberPadding');

console.log(checkNumberPadding(["001", "002"]));             // Expected: 3
console.log(checkNumberPadding(["001", "002", "9999"]));     // Expected: 3
console.log(checkNumberPadding(["1", "2", "999"]));          // Expected: 1
console.log(checkNumberPadding(["999", "9999"]));            // Expected: -3
console.log(checkNumberPadding(["99", "999", "9999"]));      // Expected: -2
console.log(checkNumberPadding(["01", "002"]));              // Expected: -1
console.log(checkNumberPadding(["001", "1"]));               // Expected: -1
console.log(checkNumberPadding(["001", "01"]));              // Expected: -1
console.log(checkNumberPadding(["abc", "", " "]));           // Expected: 0
console.log(checkNumberPadding([]));                         // Expected: 0
console.log(checkNumberPadding(["012", "0123", "01234"]));   // Expected: -1
console.log(checkNumberPadding(["012", "003", "0012"]));     // Expected: -1
