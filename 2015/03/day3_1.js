import { readTestFile, readProdFile } from "./day3.js";

//let data = await readTestFile();
let data = await readProdFile();

let bob = data.split("\n");
let counter = 0;



console.log("result: " + counter);

// ^v^v^v^v^v
if (counter === 2565) {
  console.log("*Solved*");
} else if (counter === 4) {
  console.log("*Test OK*");
} else {
  console.log("*Nope*");
}
