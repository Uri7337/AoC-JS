import { readTestFile, readProdFile } from "./day2.js";

//let data = await readTestFile();
let data = await readProdFile();

let bob = data.split("\n");
let counter = 0;

for (let index = 0; index < bob.length; index++) {
  const element = bob[index];
  let lwh = element.split("x");
  let a = parseInt(lwh[0]);
  let b = parseInt(lwh[1]);
  let c = parseInt(lwh[2]);
  let numlwh = [a, b, c];

  numlwh = numlwh.sort(function(a, b){return a - b});

  counter += (2 * a * b) + (2 * b * c) + (2 * c * a);
  counter += numlwh[0] * numlwh[1];
}

console.log("result: " + counter);

if (counter === 1586300) {
  console.log("*Solved*");
}
