import { readTestFile,readProdFile } from "./day1.js";

//let data = await readTestFile();
let data = await readProdFile();

var bob = data.split("");
var counter = 0;

for (let i = 0; i < bob.length; i++) {
    if(counter === -1){counter = i; break;}
    const element = bob[i];
    if (element === "("){
        counter++
    }else{
        counter--;
    }
    
}

console.log("result: "+counter);

if(counter===1771){
console.log("*Solved*");
}
