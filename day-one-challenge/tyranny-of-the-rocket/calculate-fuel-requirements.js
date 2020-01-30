const fs = require("fs");

const massArray = fs.readFileSync("./module-mass.txt").toString('utf-8').split("\n")


//individually calculate the fuel needed for each mass of each module
//to calculate the individual fuel requirements divide the mass by 3, then round down, and subtract 2
//then sum together all the fuel requirements 

