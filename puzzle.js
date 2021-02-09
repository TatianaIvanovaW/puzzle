const office =
  "R3, L5, R4, R3, L3, L3, R2, R4, R1, L2, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R2, L1, L3, R4, L4, R49, L4, R2, R72, L3, L2, R3, R3, R192, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L4, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R3, L3, R5, R2, R5, R3, R5, L3, R5, L3, R1, R2, R2, L4, L5, L1, L2, R4, R3, R3, R2, L1, L2, R5, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L2, L3, L6, L4, L2, R2, L3, L4, L2, L5, L3, R4, R3, L5, L1, L3, R4, R5, L4, L4, L6, L1, R2, L3, L2, L2, R2, L2";

function calculateRoute(officeRoute) {
  const routeArray = officeRoute.split(", ");

  let x = 0;
  let y = 0;
  let direction = "east";

  let result;

  for (let i = 0; i < routeArray.length; i++) {
    const side = routeArray[i].charAt(0);
    const steps = parseInt(routeArray[i].substring(1));

    if (direction === "east") {
      if (side === "L") {
        x += steps;
        direction = "north";
      } else if (side === "R") {
        x -= steps;
        direction = "south";
      }
    } else if (direction === "north") {
      if (side === "L") {
        y -= steps;
        direction = "west";
      } else if (side === "R") {
        y += steps;
        direction = "east";
      }
    } else if (direction === "west") {
      if (side === "L") {
        x -= steps;
        direction = "south";
      } else if (side === "R") {
        x += steps;
        direction = "north";
      }
    } else if (direction === "south") {
      if (side === "L") {
        y += steps;
        direction = "east";
      } else if (side === "R") {
        y -= steps;
        direction = "west";
      }
    }

    result = Math.abs(x) + Math.abs(y);
  }

  console.log(`you are ${result} blocks away from office!`);
  return result;
}

calculateRoute(office);
module.exports = calculateRoute; // tests
