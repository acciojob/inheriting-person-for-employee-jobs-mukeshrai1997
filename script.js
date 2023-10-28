function smallestDifferenceArray(N) {
  if (N % 2 === 1) {
    // If N is odd, include 0 in the array
    let result = [0];
    N--;
    // For the rest of the array, alternate between positive and negative numbers
    for (let i = 1; i <= N / 2; i++) {
      result.push(i, -i);
    }
    return result;
  } else {
    // If N is even, just create an array with positive and negative numbers
    let result = [];
    for (let i = 1; i <= N / 2; i++) {
      result.push(i, -i);
    }
    return result;
  }
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    N = parseInt(inputArr[0]);
    logic("s");
    readline.close();
  }
}

function logic(input) {
  console.log(smallestDifferenceArray(N).join(" "));
}
