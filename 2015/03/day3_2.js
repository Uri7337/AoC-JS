import { readTestFile, readProdFile } from "./day3.js";

let prod = true;
let data;

if(prod == true){
    data = await readProdFile();
}else{
    data = await readTestFile();
}


let bob = data.split("\n");
let counter = 0;



console.log("result: " + counter);

if (counter === 3737498) {
  console.log("*Solved*");
} else if (counter === 48) {
  console.log("*Test OK*");
} else {
  console.log("*Nope*");
}
