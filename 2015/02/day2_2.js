import { readTestFile, readProdFile } from "./day2.js";

let prod = true;
let data;

if(prod == true){
    data = await readProdFile();
}else{
    data = await readTestFile();
}


let bob = data.split("\n");
let counter = 0;

for (let index = 0; index < bob.length; index++) {
  const element = bob[index];
  let lwh = element.split("x");
  let a = parseInt(lwh[0]);
  let b = parseInt(lwh[1]);
  let c = parseInt(lwh[2]);
  let numlwh = [a, b, c];

  numlwh = numlwh.sort(function (a, b) {
    return a - b;
  });

  counter += a * b * c;
  counter += numlwh[0] + numlwh[1] + numlwh[0] + numlwh[1];
}

console.log("result: " + counter);

if (counter === 3737498) {
  console.log("*Solved*");
} else if (counter === 48) {
  console.log("*Test OK*");
} else {
  console.log("*Nope*");
}
