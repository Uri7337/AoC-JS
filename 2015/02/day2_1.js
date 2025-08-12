import { readTestFile,readProdFile } from "./day2.js";

let data = await readTestFile();
//let data = await readProdFile();

let bob = data.split("");
let counter = 0;

console.log(data);

//console.log("result: "+counter);

if(counter===1586300){
console.log("*Solved*");
}
