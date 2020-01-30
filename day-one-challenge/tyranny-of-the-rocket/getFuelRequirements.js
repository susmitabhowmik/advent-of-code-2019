const fs = require("fs");

const massArray = fs.readFileSync("./module-mass.txt").toString('utf-8').split("\n");

//individually calculate the fuel needed for each mass of each module
//to calculate the individual fuel requirements divide the mass by 3, then round down, and subtract 2
//then sum together all the fuel requirements 
//each fuel also requires it's own fuel

const findfuel = num => {
  return Math.floor(num / 3) - 2;
};

const totalfuel = () => {
  let sum = 0
  let fuelArray = [];

  for (let index = 0; index < massArray.length; index++) {
    let currentMass = (parseInt(massArray[index]));
    let totalfuel = 0;

    while (findfuel(currentMass) > 0) {
      totalfuel += findfuel(currentMass);
      currentMass = findfuel(currentMass);
    }
    fuelArray.push(totalfuel);
  }

  for (let index = 0; index < fuelArray.length; index++) {
    sum += fuelArray[index];
  };

  return sum;
}



console.log(totalfuel());