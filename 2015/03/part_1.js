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
let x = 0;
let y = 0;

let locHistory = [];

class Location {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  compareValues(x, y) {
    return this.x === x && this.y === y;
  }
};

locHistory.push(new Location(0,0));

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
      y++;
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
  if (!searchHistory(x, y, locHistory)) {
    locHistory.push(new Location(x,y));
    counter++;
  }
  //console.log(move);
}

console.log("result: " + counter);

// ^v^v^v^v^v
if (counter === 2565) {
  console.log("*Solved*");
} else if (counter === 4) {
  console.log("*Test OK*");
} else {
  console.log("*Nope*");
}
