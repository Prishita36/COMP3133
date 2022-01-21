const csv = require("csv-parser");
const fs = require("fs");
const inputs = [];

fs.createReadStream("input_countries.csv")
  .pipe(csv())
  .on("data", (data) => inputs.push(data));

const header = ["country,year,population"];
const Canada = [];
const US = [];

inputs.forEach((input) => {
  if (input.country === "Canada")
    Canada.push(`${input.country},${input.year},${input.population}`);
  if (input.country === "United States")
    US.push(`${input.country},${input.year},${input.population}`);
});

fs.writeFile("canada.txt", header.concat(Canada).join("\n"), (err) => {
  if (err) {
    console.log("Error writing to canada.txt file", err);
  } else {
    console.log(`saved as canada.txt`);
  }
});

fs.writeFile("usa.txt", header.concat(US).join("\n"), (err) => {
  if (err) {
    console.log("Error writing to usa.txt file", err);
  } else {
    console.log(`saved as usa.txt`);
  }
});