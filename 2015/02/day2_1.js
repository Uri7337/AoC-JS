import { readTestFile,readProdFile } from "./day2.js";

//let data = await readTestFile();
let data = await readProdFile();

var bob = data.split("");
var counter = 0;



console.log("result: "+counter);

if(counter===1586300){
console.log("*Solved*");
}
