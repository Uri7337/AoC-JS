import { readTestFile, readProdFile } from "../../other/readFile.js";

let prod = false;
let data;

if (prod == true) {
  data = await readProdFile("03");
} else {
  data = await readTestFile("03");
}

let bob = data.split("");
let counter = 1;
let santax = 0;
let santay = 0;
let robox = 0;
let roboy = 0;

let santa = true;

let santalocHistory = [];
let robolocHistory = [];

class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  compareValues(x, y) {
    return this.x === x && this.y === y;
  }
}

santalocHistory.push(new Location(0, 0));
robolocHistory.push(new Location(0, 0));

function searchHistory(x, y, locHistory) {
  let foundMatch = false;
  locHistory.forEach((previousLocation) => {
    if (previousLocation.compareValues(x, y)) {
      foundMatch = true;
    }
  });
  return foundMatch;
}

for (let index = 0; index < bob.length; index++) {
  const move = bob[index];
  switch (move) {
    case "^":
      if(santa){

      }else{

      }
      break;
    case ">":
      x++;
      break;
    case "v":
      y--;
      break;
    case "<":
      x--;
      break;
  }
  if (santa) {
    if (!searchHistory(x, y, locHistory)) {
      locHistory.push(new Location(x, y));
      counter++;
    }
  }else{
    
  }

  //console.log(move);
}

console.log("result: " + counter);

// ^v^v^v^v^v
if (counter === 2639) {
  console.log("*Solved*");
} else if (counter === 3) {
  console.log("*Test OK*");
} else {
  console.log("*Nope*");
}
