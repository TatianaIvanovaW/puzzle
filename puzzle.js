let x = 0;
let y = 0;
let direction = "east";

let result = 0;

const route = "L2, L2, L2"; // expecting 2
const route1 = "R2, L3"; // expecting 5
const route2 = "R5, L5, R5, R3​"; // expecting 12
const officeRoute =
  "R3, L5, R4, R3, L3, L3, R2, R4, R1, L2, L5, R5, R5, R2, R2, R1, L2,L3, L2, L1, R3, L5, R187, R1, R2, L1, L3, R4, L4, R49, L4, R2, R72,L3, L2, R3, R3, R192, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2,R4, L4, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2,R2, R3, L3, R5, R2, R5, R3, R5, L3, R5, L3, R1, R2, R2, L4, L5, L1, L2, R4, R3, R3, R2, L1, L2, R5, R5, L2, R3, L4, L5, L5, L4, R4, L2,R1, R1, L2, L3, L2, R2, L4, R3, R2, L2, L3, L6, L4, L2, R2, L3, L4,L2, L5, L3, R4, R3, L5, L1, L3, R4, R5, L4, L4, L6, L1, R2, L3, L2,L2, R2, L2";

const newArray = officeRoute.split(", ");

for (let i = 0; i < newArray.length; i++) {
  const ff = newArray[i].charAt(0);
  const gg = parseInt(newArray[i].substring(1));

  if (direction === "east") {
    if (ff === "L") {
      x += gg;
      direction = "north";
    } else if (ff === "R") {
      x -= gg;
      direction = "south";
    }
  } else if (direction === "north") {
    if (ff === "L") {
      y -= gg;
      direction = "west";
    } else if (ff === "R") {
      y += gg;
      direction = "east";
    }
  } else if (direction === "west") {
    if (ff === "L") {
      x -= gg;
      direction = "south";
    } else if (ff === "R") {
      x += gg;
      direction = "north";
    }
  } else if (direction === "south") {
    if (ff === "L") {
      y += gg;
      direction = "east";
    } else if (ff === "R") {
      y -= gg;
      direction = "west";
    }
  }
  result = Math.abs(x) + Math.abs(y);

  //   console.log(`x: ${x}, y: ${y}, direction: ${direction}`);
}
console.log(`you are ${result} blocks away from office!`);
